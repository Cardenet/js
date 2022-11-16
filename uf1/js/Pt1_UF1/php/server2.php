<?php

//variables, arrays,...


//recoger las peticiones
$entrada=file_get_contents('php://input');
$registro_array=[];

//paso de JSON, cadena de texto, a variable de PHP
$entrada=json_decode($entrada);
$name= $entrada->{'nom'};
$password= $entrada->{'contrasenya'};
if (($name==true) && ($password==true)){

    array_push($registro_array, $entrada);
    echo json_encode("Ahora estas registrado");
};
