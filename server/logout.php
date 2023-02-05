<?php
session_start();
session_destroy();
$response['success'] = true;
$response['general_message'] = "";
$response['errors']  = array();
exit(json_encode($response));
?>