<?php
ini_set('session.gc_maxlifetime', 3600);
session_set_cookie_params(3600);
session_start();
session_destroy();
$response['success'] = true;
$response['general_message'] = "";
$response['errors']  = array();
exit(json_encode($response));
?>