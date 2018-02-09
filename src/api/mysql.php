<?php
    $conn = new mysqli('localhost', 'root', '', 'juanpi');


    $result=$conn->query('select * from accounts');

    $row=$result->fetch_all(MYSQLI_ASSOC);

    echo json_encode($row);
?>