<?php

//variables, arrays,...
// $ciudades=array["Barcelona","Madrid","Valencia"]

//recoger las peticiones
$entrada=file_get_contents('php://input');


//paso de JSON, cadena de texto, a variable de PHP
$entrada=json_decode($entrada);
$origen= $entrada->{'start'};
// var_dump($origen);
$destinacio= $entrada->{'end'};
// var_dump($destinacio);
$ida= $entrada->{'start_date'};
$vuelta= $entrada->{'end_date'};
$people= $entrada->{'people'};
$vuelos=[
  "Barcelona"=>["Madrid"=>["Durada"=>"1h 7min","Preu"=>55*$people],
                "Valencia"=>["Durada"=>"57min","Preu"=>40*$people]],
  "Madrid" =>  ["Barcelona"=>["Durada"=>"1h 7min","Preu"=>55*$people],
                "Valencia"=>["Durada"=>"52min","Preu"=>35*$people]],
  "Valencia" =>["Barcelona"=>["Durada"=>"57min","Preu"=>40*$people],
                "Madrid"=>["Durada"=>"52min","Preu"=>35*$people]]
  ];
  // var_dump($vuelos);
  $resp=$vuelos[$origen][$destinacio];
  // $pepe=[$origen,$destinacio,$resp];
  echo json_encode($resp);
  //  function classification($origen,$destinacio): string{
  //    $resultado = "";
     
  //    
  //    foreach($vuelos as $key => $element){
  //        if (($origen == $element["Barcelona"]) AND ($destinacio == $element['to'])){
  //            $resultado = $element['duracion'];
  //        }
  //    }
  //    return $resultado;
  //    //echo json_encode($resultado);
  //  };
  //  $resp = classification($origen,$destinacio);
  //  echo json_encode($resp);
  //  $result=$vuelos[$origen][$destinacio];
  //   var_dump($result);
 // 
 
// echo json_encode($result);
//  if(($origen !="") && ($destinacio != "") && ($ida != "") && ($vuelta != "") && ($people != "")){
//   // header("Location: ../busqueda.html") ;
//    echo json_encode("si");
//  }  else {
//    echo json_encode("Tienes que rellenar todos los campos");
//  }

//  if ($origen == $destinacio ){

//      echo json_encode("No puedes volar al mismo sitio");

//     } else {

//      echo json_encode("si");
//    }

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