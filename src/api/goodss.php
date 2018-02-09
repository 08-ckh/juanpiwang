<?php

    require('connect.php');

    $result=$conn->query('select * from commodity');

    $row=$result->fetch_all(MYSQLI_ASSOC);
    $cc=array_slice($row,0,30);
    
    echo json_encode($cc,JSON_UNESCAPED_UNICODE);
?>