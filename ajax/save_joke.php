<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') die();

require_once('../../../init.php');

$mysql = Mysql::getInstance();

$data = Helper::getPost();

$query = "
    INSERT INTO `chuck_joke`
    (`joke`)
    VALUES
    (?)
";

$mysql->query($query, $data['joke']);