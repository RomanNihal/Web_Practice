<?php
    require("connection.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="try.php" method=""POST>
        <input type="num" name="id">
        <input type="submit" onclick="">
    </form>
</body>
</html>

<?php

$id = $_POST("id");
$sql = "SELECT id, name FROM student WHERE id=$id";
$run = mysqli_query($mysqli, $sql);

while( $row = mysqli_fetch_array($run) ){
    $id = $row["id"];
    $name = $row["name"];
}

?>