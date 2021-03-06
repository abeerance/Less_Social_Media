<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require __DIR__.'/classes/Database.php';

$id = json_decode(file_get_contents("php://input"));
$id = $_POST['id'];

// DB Connection
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// fetch user ID
$fetch_user_by_id = "SELECT `username` FROM `users` WHERE `id`=:id";
$query_stmt = $conn->prepare($fetch_user_by_id);
$query_stmt->bindValue(':id', $id,PDO::PARAM_INT);
$query_stmt->execute();
$query_stmt->rowCount();
$row = $query_stmt->fetch(PDO::FETCH_ASSOC);;
$username = $row['username'];

echo json_encode($username);
?>