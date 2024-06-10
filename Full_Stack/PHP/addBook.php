<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_name = $_POST["user_name"];
    $title = $_POST["title"];
    $author = $_POST["author"];

    $servername = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "clp_3_web";

    $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT book_count FROM users WHERE user_name = '$user_name'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $book_count = $row["book_count"];

        if ($book_count < 2) {
            $sql = "INSERT INTO book_details (book_title, book_author) VALUES ('$title', '$author')";
            $conn->query($sql);

            $sql = "UPDATE users SET book_count = book_count + 1 WHERE user_name = '$user_name'";
            $conn->query($sql);

            echo "Book added successfully!";
        } else {
            echo "You have reached the maximum limit of adding books.";
        }
    } else {
        echo "User not found.";
    }

    $conn->close();
}
?>
