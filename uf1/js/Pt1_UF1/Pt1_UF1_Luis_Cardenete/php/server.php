<?php

//variables, arrays,...


//recoger las peticiones
$entrada=file_get_contents('php://input');

//paso de JSON, cadena de texto, a variable de PHP
$entrada=json_decode($entrada);
$name= $entrada->{'nom'};
$password= $entrada->{'contrasenya'};
$users=array(
  "luis" => 1234,
  "pepe" => 4321
);
$respuesta= "¡Usuario o contraseña incorrectos!";
if (array_key_exists($name,$users)){
  if($users[$name] == $password){
   $respuesta="Usuario";
  } 
};
echo json_encode($respuesta)

// if (($name == "luis") AND ($password == "1234")){

  //   echo json_encode("Usuario");

  //  } else if(($name == "pepe") AND ($password == "1234")) {

  //   echo json_encode("Admin") ;

    

  //  } else {
  //   echo json_encode("¡Usuario o contraseña incorrectos!") ;
  //  }

//var_dump($entrada);
/*
let user2={ //objecte JS
      nom: name,
      curs: course  
    };
*/
//codigo de PHP hago lo que sea y al final necesito
//enviar el siguiente array
// $array=["dawbio2", "daw2"];


//envio del resultado imprimiéndolo: variable PHP a JSON
//  echo json_encode($name);







?>