<?php
ini_set('session.gc_maxlifetime', 3600);
session_set_cookie_params(3600);
session_start();
$correctUsername = "admin";
$correstPassword = "admin";
if($_SERVER["REQUEST_METHOD"] == "POST"){
    if($_POST["username"] == $correctUsername && $_POST["password"] = $correstPassword){
            $response = array();
            $response['success'] = true;
            $response['general_message'] = $correctUsername;
            $response['errors']  = array();
            $_SESSION["username"] = $correctUsername;
            exit(json_encode($response));
    }
    else{
            $response = array();
            $response['success'] = false;
            $response['general_message'] = $correctUsername;
            $response['errors']  = array();
            exit(json_encode($response));
    }
}
else{
    exit("Unauthorized access");
}
?>