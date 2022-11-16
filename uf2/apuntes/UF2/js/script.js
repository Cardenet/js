$(document).ready(function(){
  $("button").click(function(){

//MANIPULACION HTML
    //gets
    //alert($("#idp1").text())
    //alert($("#idp1").html())
    //alert($("#intro").val())
   // alert($("#idp2").attr("class"));
   
   //set
   $("#intro").val("Estic dins de la caixa input");

   //add, remove DENTRO del selector
   $("p").append("HEM AFEGIT AQUEST TEXT AL QUE JA HI HAVIA ABANS");
   $("#idh3").prepend("Estem afegint per davant del que hi havia abans");

    var text1="<h1>Hola text1</h1>";
    var text2=$("<p></p>").text("Text 2");
    var text3=document.createElement("p");
    text3.innerHTML="Text 3";
    $("body").append(text1,text2,text3);
    
    //añado DELANTE y DETRAS del propio selector
    $("#idh3").after("After");
    $("#idh3").before("Before");
    
    //vaciado
    //$("div").remove();
    $("div").empty();


    //MANIPULACION DE CSS
    $("#idp1").addClass("blue");
    $("#idp2").removeClass("important");
    $("#idp0").toggleClass("blue");
    $("#idp2").css({"background-color":"pink","font-size":"200%"});
  });

});