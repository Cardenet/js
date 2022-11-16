<?php
$entrada=file_get_contents('php://input');
$ciudades= array("Barcelona","Madrid","Valencia");
echo json_encode($ciudades)
?>