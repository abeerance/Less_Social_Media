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
elseif(!isset($data->image) 
|| empty(trim($data->image))
):

$fields = ['fields' => ['image']];
$returnData = msg(0,422,'No image selected',$fields);

// if image exist
else: 
    $image = $data->image;
    $comment = (trim($data->comment));

    $imageFile = $_FILES[$image]['name'];

    // Generate random numbers 
    $numb1 = rand(1111,9999);
    $numb2 = rand(1111,9999);

    // Concatenate random numbers
    $numb3 = $numb1.$numb2;
    $numb3 = md5($numb3);
    $image = $numb3.$image;

    $userImageFolder = __DIR__.'./user-assets/'.$user;
    $imgLoc = $userImageFolder."/".$image;
    move_uploaded_file($_FILES[$image]['tmp_name'],$imgLoc);


    $insert_image_by_id_query = "INSERT INTO `posts` (post_img, post_desc, users_id), VALUES (:image, :desc, :userid)";
    $insert_stmt = $conn->prepare($insert_image_by_id_query);

    // Data binding
    $insert_stmt->bindValue(':image', htmlspecialchars(strip_tags($image)),PDO::PARAM_STR);
    $insert_stmt->bindValue(':desc', htmlspecialchars(strip_tags($comment)),PDO::PARAM_STR);
    $insert_stmt->bindValue(':userid', $user,PDO::PARAM_STR);

    $insert_stmt->execute();
    print_r($insert_stmt);

endif;
?>