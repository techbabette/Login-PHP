<?php
ini_set('session.gc_maxlifetime', 3600);
session_set_cookie_params(3600);
session_start();
$response = array();
if(isset($_SESSION["username"])){
    $response['success'] = true;
    $response['general_message'] = $_SESSION["username"];
    $response['errors']  = array();
    exit(json_encode($response));
}
else{
    $response['success'] = false;
    $response['general_message'] = "";
    $response['errors']  = array();
    exit(json_encode($response));
}
?>