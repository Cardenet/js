//  document.addEventListener("DOMContentLoaded", function(){
//    var paragraf= document.getElementById("id1");
//    paragraf=document.querySelector("#id1");//recollir id's
//    var hs=document.querySelector("h2");//recollir tags
//    var classes=document.querySelector(".error")//recollir clases 
//    var input=document.querySelector("#id2").value;//Per recollir en javascript
//  })

    // var paragraf=$("#id1").html();//.text(), per recollir la informacio
    // console.log(paragraf);
    // var tags=$("h2:first");
    // console.log(tags);
    // var classes=$(".error");
    // console.log(classes);
    // var input= $("#id2").val();//recollir del web
    // console.log(input);
    // $("h1:first").html("huepa que pasa gente soy lolito")
    // $("#id0").html("caca")
    // $("#id3").click(function(){
    //     alert("hola?")
    // });
    // $("#div1").hide();
    // document.querySelector("#id2").val();

$(document).ready(function(){
  $("#nom_cognom").blur(function(){
    var name=$("#nom_cognom").val();
    console.log(name)
    var flag=validaNomCognoms(name);
    if (flag) {
      $("#errorN").html("");
    }
    else {
      $("#errorN").html("vuelve a introducir el nombre");
    }
  });
    
    //haig de cridar als diferents validadors
    
    //si hi ha algun error, missatge d'error al camp corresponent i botó deshabilitat
    
  $("#email").blur(function(){
    email=$("#email").val();
      var flag3=validaEmail(email);
      if (flag3) {
          $("#errorE").html("");
      }
      else {
        $("#errorE").html("vuelve a introducir el email");
      }
      });
      
  $("#dni").blur(function(){
    your_dni=$("#dni").val();
    validaDni(your_dni);
  });


})
function validaNomCognoms(value) {
  var patternom = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
  if (patternom.test(value)) {
      return true;
  } else {
      return false;
  };

}
function validaEmail(value){
   
  var pattern2=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  if (pattern2.test(value)){
      return true
  }
  else {
      return false
  }
     
}
function validaDni(dni){
     
  if(dni.length==9){
      
      let numero=dni.substring(0,8);

      console.log(numero);
      let letra=dni.substr(dni.length-1,1);
      console.log(letra);
      if(isNaN(numero) || !isNaN(letra)){
          $("#errorD").html("Formato incorrecto");
          flag=false;
      }else{
          let calculo=numero % 23;//numero entre 0 i 22
          console.log(calculo);
          let letras="TRWAGMYFPDXBNJZSQVHLCKE";
          //let letrasArray=Array("T","R",...);
          // console.log(letras[calculo]);//miro la letra de verdad
  
          if(letra.toUpperCase()==letras[calculo]){
              $("#errorD").html("");
          }else{
              $("#errorD").html("Tu dni ${dni} es erroneo");
              flag=false;
          }
      }
      
  }else{
      $("#errorD").html("Tamaño incorrecto");
      flag=false;
  }
  
}

