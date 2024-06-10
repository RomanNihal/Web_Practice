<?php
$username = "root";
$password = "";
$database = "university";

$mysqli = new mysqli("localhost", $username, $password, $database);

if ($mysqli->connect_error) {
  die("Connection failed: " . $mysqli->connect_error);
}
echo "Connected successfully";
?>