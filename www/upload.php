<?php

$api_secret = "YunRphVYXw_Lf93EghJz1wuBeOE";
$timestamp = time();

$signature = sha1("timestamp=" . $timestamp . $api_secret);

$output = array(
  "timestamp" => $timestamp,
  "signature" => $signature
);

echo json_encode($output);