<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require __DIR__.'/classes/Database.php';

$username = json_decode(file_get_contents("php://input"));
$username = $_POST['username'];

// DB Connection
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// fetch user ID
$fetch_user_by_username = "SELECT `id` FROM `users` WHERE `username`=:username";
$query_stmt = $conn->prepare($fetch_user_by_username);
$query_stmt->bindValue(':username', $username,PDO::PARAM_STR);
$query_stmt->execute();
$query_stmt->rowCount();
$row = $query_stmt->fetch(PDO::FETCH_ASSOC);;
$userid = $row['id'];


// fetch all posts
$fetch_get_all_post = "SELECT * FROM `posts` WHERE `users_id`=:userid";
$query_stmt = $conn->prepare($fetch_get_all_post);

// Data binding
$query_stmt->bindValue(':userid', $userid,PDO::PARAM_INT);
$query_stmt->execute();
$images = $query_stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($images);
?>