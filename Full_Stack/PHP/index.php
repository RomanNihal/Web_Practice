<?php
    require('connection.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="POST">
        <input type="int" name="id">
        <input type="submit">
    </form>
</body>
</html>

<?php
    if(isset($_POST)){
        $id = $_POST['id'];
        $sql = "SELECT ID, Name, Dept FROM student WHERE ID = $id";
        $run = mysqli_query($mysqli, $sql);

        echo '<table style="width:50%" border="2" >
            <tr>
                <th>ID</font> </th>
                <th> Student Name</font> </th>
                <th> Student Dept.</font> </th>
            </tr>';

        while ($row = mysqli_fetch_array($run)) {
            $ID = $row["ID"];
            $Name = $row["Name"];
            $Dept = $row["Dept"];

            echo '<tr>
                <td>'.$ID.'</td>
                <td>'.$Name.'</td>
                <td>'.$Dept.'</td>
            </tr>';
        }
    }
?>