$(document).ready(function(){

//$("p") em dirigeixo a tots els paràgrafs
//$("#idh3") em dirigeixo a l'id idh3
//$(".error")//em diregeixo a la classe error

$("button").click(function(){//quan faig clic al butó
        //$("p").hide();//tots el p s'amaguen
        //$("#idp1").hide();//només l'element amb id=idp1
        //$(".error").hide();//vull amagar l'element amb la classe error
        //$("p, h3 ").hide();//dir més d'un selector a la vegada
        //$("p:first").hide();//:last //es diregeix al primer paragraf
        //$("p:odd").hide();//:even //es dirigeix a la posicio parella/senar
        //$("div>p").hide();//amago el p dins del div
        //$("div>p,p:eq(2)").hide();//amaga el p en posicio 2(començo per 0)
        //i el p de dins del div
        //$(this).hide();//amagar el propi botó
        
        //recullo el que hi ha a l'input
        console.log($("#intro").val());
        //recullo d'un p
        console.log($(".error").text());
        alert($(".error").html());

});
//events click
   // $("#idp1").click(function(){
   // $("#idp1").dblclick(function(){     
  // $("#idp1").mouseenter(function(){//quan passa per sobre el ratolí
  //$("#idp1").mouseleave(function(){
  //  $("#idp1").mousedown(function(){//quan faig servir el ratolí
  /*$("#idp1").hover(function(){//QUAN ESTIC A SOBRE (ENTRANT O SORTINT)
    alert("You entered p1!");
    },
  function(){
    alert("Bye! You now leave p1!");
  });*/
  /*$("input").focus(function(){//quan té el focus
      $(this).css("background-color","yellow");
  });

  $("input").blur(function(){//quan surt de ser tenir el focus
      $(this).css("background-color","blue");
  });

  $(".error").on({
    mouseenter: function(){
        $(this).css("background-color","yellow");
    },
    mouseleave: function(){
        $(this).css("background-color","black");
    },
    click: function(){
        $(this).css("background-color","pink");
    }




  })*/

});
//equivalent al document ready:
/*$(function(){

});*/
/*$(document).ready(nomFuncio);

function nomFuncio(){

}*/