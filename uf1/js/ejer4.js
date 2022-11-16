document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("form1").style.display="none";
    document.getElementById("ejercicio3").addEventListener("click",function(){
        document.getElementById("form1").style.display="block";
        document.getElementById("validar").addEventListener("click",function(){
    
            var gmail= document.getElementById("email").value; 
            if (gmail.includes("@")) [document.getElementById("arroba").innerHTML="tiene arroba"] 
            fist_part=gmail.split("@");
            Name=fist_part[0].length
            last_part=fist_part[1]
            Second_part=last_part.split(".")
            ser=Second_part[0].length
            dom=Second_part[1].length
            if (Name < 8) [document.getElementById("men").innerHTML="tiene que tener 8 letras como minimo el nombre"]
            else(Name => 8) [document.getElementById("men").innerHTML="longitud del nombre ok"]
            if(ser <= 3) [document.getElementById("men2").innerHTML="tiene que tener 3 letras como minimo el server"]
            else(ser >3) [document.getElementById("men2").innerHTML="longitud del server ok"]
            if ((dom > 2) && (dom < 7)) [document.getElementById("men3").innerHTML="longitud del dominio ok"]
            else ((dom < 2) && (dom > 7)) [document.getElementById("men3").innerHTML="tiene que tener como minimo 2 a maximo 6 caracteres el dominio"]
           });
    });

  

   
        
      
    
});