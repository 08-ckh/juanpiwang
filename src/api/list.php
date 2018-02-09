<?php

    require('connect.php');

    $page_no = isset($_POST['pageNo']) ? $_POST['pageNo'] : 1;
    $qty = isset($_POST['qty']) ? $_POST['qty'] : 10;

    $result=$conn->query('select * from commodity');

    $row=$result->fetch_all(MYSQLI_ASSOC);

        
         
    $res = array(
        'data'=>array_slice($row, ($page_no-1)*$qty,$qty),
        'total'=>count($row),
        'qty'=>$qty,
        'pageNo'=>$page_no*1
    );


    echo json_encode($res,JSON_UNESCAPED_UNICODE);


?>