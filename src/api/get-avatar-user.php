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
$fetch_user_by_username = "SELECT `username` FROM `users` WHERE `username`=:username";
$query_stmt = $conn->prepare($fetch_user_by_username);
$query_stmt->bindValue(':username', $username,PDO::PARAM_STR);
$query_stmt->execute();
$query_stmt->rowCount();
$row = $query_stmt->fetch(PDO::FETCH_ASSOC);;
$username = $row['username'];
echo json_encode($username);
?>