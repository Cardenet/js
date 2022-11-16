
document.addEventListener("DOMContentLoaded", function(){

//los dos divs no se vean
    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="none";

    document.getElementById("btEj1").addEventListener("click", function(){
    //visibilidad de los divs
        document.getElementById("div1").style.display="block";
        document.getElementById("div2").style.display="none";
    //calculo del factorial de 10
        let factorial=100;

        for(let i=factorial-1;i>=2;i--){
            
            factorial *= i;
         
        }
        document.getElementById("div1").innerHTML ="El resultat del factorial és "+factorial
       
        




    });    

    document.getElementById("btEj2").addEventListener("click",calculadora);
    document.getElementById("btSuma").addEventListener("click",suma);


});//end DOMContentLoaded

function calculadora(){
    document.getElementById("div2").style.display="block";//ensenyar
    document.getElementById("div1").style.display="none";//ocultar

}
function suma(){
    var num1=Number.parseFloat(document.getElementById("num1").value);
    //console.log(num1);
    var num2=Number.parseFloat(document.getElementById("num2").value);

    //isNaN(num1)//quan vols detectar si tens o no un numero. True vol dir no es numero
    if(isNaN(num1) || isNaN(num2)){
        document.getElementById("respostes").innerHTML='Els camps han de ser numèrics';
    }else{
       // document.getElementById("respostes").innerHTML="El resultat de la suma és "+ (num1+num2) +"seguir la frase";
        document.getElementById("respostes").innerHTML=`El resultat de la suma és ${(num1+num2)}`;

    }
  }
