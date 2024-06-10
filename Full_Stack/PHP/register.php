<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_name = $_POST["user_name"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    $servername = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "clp_3_web";

    $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO users (user_name, email, password) VALUES ('$user_name', '$email', '$password')";
    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
