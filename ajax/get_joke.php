<?php

require_once('../../../init.php');

$mysql = Mysql::getInstance();

$query = "
    SELECT * FROM `chuck_joke`
    ORDER BY RAND()
    LIMIT 1
";

$joke = $mysql->query($query)->fetchArray();

echo $joke['joke'];