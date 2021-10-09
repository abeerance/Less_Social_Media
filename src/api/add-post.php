<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require __DIR__.'/classes/Database.php';

$response = array();

$postComment = $_POST["comment"];
$username = $_POST["username"];

// set filenames
$file_name = $_FILES["file"]["name"][0];
$file_tmp_name = $_FILES["file"]["tmp_name"][0];


// generate random numbers 
$numb1 = rand(1111,9999);
$numb2 = rand(1111,9999);

// goncatenate random numbers
$numb3 = $numb1.$numb2;
$numb3 = md5($numb3);
$image = $numb3.$file_name;

// definde user folder and move uploaded file
$userImageFolder = __DIR__.'/user-assets/'.$username;
$imgLoc = $userImageFolder."/".$image;
move_uploaded_file($file_tmp_name,$imgLoc);

// DB Connection
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// fetch user ID
$fetch_user_by_id = "SELECT `id`,'username' FROM `users` WHERE `username`=:username";
$query_stmt = $conn->prepare($fetch_user_by_id);
$query_stmt->bindValue(':username', $username,PDO::PARAM_STR);
$query_stmt->execute();
$query_stmt->rowCount();
$row = $query_stmt->fetch(PDO::FETCH_ASSOC);
$userID = $row['id'];

// insert image
$insert_image_by_id_query = "INSERT INTO `posts`(`post_img`,`post_desc`,`users_id`) VALUES (:image, :desc, :userid)";
$insert_stmt = $conn->prepare($insert_image_by_id_query);

// insert image data binding
$insert_stmt->bindValue(':image', htmlspecialchars(strip_tags($image)),PDO::PARAM_STR);
$insert_stmt->bindValue(':desc', htmlspecialchars(strip_tags($postComment)),PDO::PARAM_STR);
$insert_stmt->bindValue(':userid', $userID,PDO::PARAM_INT);
$insert_stmt->execute();
?>