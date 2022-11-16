//  document.addEventListener("DOMContentLoaded", function(){
//    var paragraf= document.getElementById("id1");
//    paragraf=document.querySelector("#id1");//recollir id's
//    var hs=document.querySelector("h2");//recollir tags
//    var classes=document.querySelector(".error")//recollir clases 
//    var input=document.querySelector("#id2").value;//Per recollir en javascript
//  })
$(document).ready(function(){
    $("#calcular").click(function(){
        var x=$("#num1").val();
        var y=$("#num2").val();
        // console.log(x);
        // console.log(y);
        if (isNaN(x) || isNaN(y)) {  
            $("#resultado").html("eso no es un numero")  
        } else {  
                if(x > y){
                $("#resultado").html("el primer numero es mas grande")
                } else{
                $("#resultado").html("el segundo numero es mas grande")
            } 
            }
        
        
    });
    $("#suma").click(function(){
        var x=$("#num1").val();
        var y=$("#num2").val();
        if (isNaN(x) || isNaN(y)) {  
                text="eso no es un numero"
        } else {  
              result=parseFloat(x)+parseFloat(y);  
              text= result;  
            }  
        $("#resultado1").html(text)

    });
    $("#resta").click(function(){
        var x=$("#num1").val();
        var y=$("#num2").val();
        if (isNaN(x) || isNaN(y)) {  
            text="eso no es un numero"
        } else {  
              result=parseFloat(x)-parseFloat(y);  
              text= result;  
            }  
        $("#resultado1").html(text)

    });
    $("#mult").click(function(){
        var x=$("#num1").val();
        var y=$("#num2").val();
        if (isNaN(x) || isNaN(y)) {  
            text="eso no es un numero"
        } else {  
              result=parseFloat(x)*parseFloat(y);  
              text= result;  
            }  
        $("#resultado1").html(text)

    });
    $("#divi").click(function(){
        var x=$("#num1").val();
        var y=$("#num2").val();
        if (isNaN(x) || isNaN(y)) {  
            text="eso no es un numero"
        } else {  
              result=parseFloat(x)/parseFloat(y);  
              text= result;  
            }  
        $("#resultado1").html(text)

    });
    })
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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

