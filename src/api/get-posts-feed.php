<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require __DIR__.'/classes/Database.php';

$username = $_POST['username'];

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

// fetch all posts
$fetch_get_all_post = "SELECT * FROM `posts` WHERE NOT `users_id`=:userID";
$query_stmt = $conn->prepare($fetch_get_all_post);

// Data binding
$query_stmt->bindValue(':userID', $userID,PDO::PARAM_INT);
$query_stmt->execute();
$rowFetch = $query_stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($rowFetch);
?>



