<?php
$username = "root";
$password = "";
$database = "clp_3_web";

// Create connection
$mysqli = new mysqli("localhost", $username, $password, $database);

// Check connection
if ($mysqli->connect_error) {
die("Connection failed: " . $mysqli->connect_error);
}
echo "Connected successfully";

$mail = $_POST["mail"];
$pass = $_POST["pass"];

$sql = "INSERT INTO student(st_name, st_dept) VALUES('$mail','$pass')";
$run = mysqli_multi_query($mysqli,$sql) or die(mysqli_query());