<?php

    require('connect.php');

    $result=$conn->query('select * from commodity');

    $row=$result->fetch_all(MYSQLI_ASSOC);


    $cc=array_slice($row,6,21);
        //print_r($cc);
         
    
    echo json_encode($cc,JSON_UNESCAPED_UNICODE);



?>