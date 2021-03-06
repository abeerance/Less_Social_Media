<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

function msg($success,$status,$message,$extra = []){
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message
    ],$extra);
}

require __DIR__.'/classes/Database.php';
require __DIR__.'/classes/JwtHandler.php';

$db_connection = new Database();
$conn = $db_connection->dbConnection();

$data = json_decode(file_get_contents("php://input"));
$returnData = [];

// check if request method is POST
if($_SERVER["REQUEST_METHOD"] != "POST"):
    $returnData = msg(0,404,'Page Not Found!');

// check empty fields
elseif(!isset($data->username) 
    || !isset($data->password)
    || empty(trim($data->username))
    || empty(trim($data->password))
    ):

    $fields = ['fields' => ['username','password']];
    $returnData = msg(0,422,'Please Fill in all Required Fields!',$fields);

// if no empty fields
else:
    $username = trim($data->username);
    $password = trim($data->password);

    // check username length
    if(strlen($username) < 3):
        $returnData = msg(0,422,'Your username must be at least 3 characters long!');
    
    // check password length
    elseif(strlen($password) < 8):
        $returnData = msg(0,422,'Your password must be at least 8 characters long!');

    // beginning login procedure
    else:
        try{
            $fetch_user_by_username = "SELECT * FROM `users` WHERE `username`=:username";
            $query_stmt = $conn->prepare($fetch_user_by_username);
            $query_stmt->bindValue(':username', $username,PDO::PARAM_STR);
            $query_stmt->execute();

            // check if username exists
            if($query_stmt->rowCount()):
                $row = $query_stmt->fetch(PDO::FETCH_ASSOC);
                $check_password = password_verify($password, $row['password']);

                // check if password is correct and generate login token
                if($check_password):

                    $jwt = new JwtHandler();
                    $token = $jwt->_jwt_encode_data(
                        'http://localhost/less_webapp/',
                        array("user_id"=> $row['id'])
                    );
                    
                    $returnData = [
                        'success' => 1,
                        'message' => 'You have successfully logged in.',
                        'token' => $token
                    ];

                // invalid password msg
                else:
                    $returnData = msg(0,422,'Invalid Password!');
                endif;

            // invalid username msg
            else:
                $returnData = msg(0,422,'Invalid username!');
            endif;
        }
        catch(PDOException $e){
            $returnData = msg(0,500,$e->getMessage());
        }

    endif;

endif;

echo json_encode($returnData);
?>