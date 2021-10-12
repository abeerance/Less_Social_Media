<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require __DIR__.'/classes/Database.php';

// set username
$username = $_POST["username"];

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
echo json_encode($userID);

?>