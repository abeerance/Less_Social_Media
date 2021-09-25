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
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// data form request
$data = json_decode(file_get_contents("php://input"));
$returnData = [];

// check if request method is POST
if($_SERVER["REQUEST_METHOD"] != "POST"):
    $returnData = msg(0,404,'Page Not Found!');

// check empty fields
elseif(!isset($data->email) 
    || empty(trim($data->email))
    ):

    $fields = ['fields' => ['email']];
    $returnData = msg(0,422,'Please Fill in all Required Fields!',$fields);

// no empty fields
else:
    
    $email = trim($data->email);
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)):
        $returnData = msg(0,422,'Invalid Email Address!');
    
    else:
        try{

            $check_email = "SELECT `email` FROM `users` WHERE `email`=:email";
            $check_email_stmt = $conn->prepare($check_email);
            $check_email_stmt->bindValue(':email', $email,PDO::PARAM_STR);
            $check_email_stmt->execute();

            if($check_email_stmt->rowCount()):
                $returnData = msg(0,422, 'No such E-Mail exist');
            
            else:
                $expFormat = mktime(date("H"), date("i"), date("s"), date("m") ,date("d")+1, date("Y"));
                $expDate = date("Y-m-d H:i:s",$expFormat);
                $resetKey = md5(2418*2+$email);
                $addKey = substr(md5(uniqid(rand(),1)),3,10);
                $resetKey = $resetKey . $addKey;

                // DATA BINDING
                $insert_stmt->bindValue(':resetKey', $resetKey,PDO::PARAM_STR);
                $insert_stmt->bindValue(':$expDate', $expDate,PDO::PARAM_STR);

                $insert_stmt->execute();

                $returnData = msg(1,201,'You have successfully registered.');

            endif;

        }
        catch(PDOException $e){
            $returnData = msg(0,500,$e->getMessage());
        }
    endif;
    
endif;

echo json_encode($returnData);
?>