
var myName;
var mySurname;
var myEmail;
var myDni;
var myBirh;
var errorName=true, errorApellidos=true, errorEmail=true,errorDni=true, errorFecha=true; //control dels errors de cada camp
var p;
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tuNombre").addEventListener("blur", function(){
        myName=document.getElementById("tuNombre").value;//recojo lo que hay dentro del campo nombre
        errorName=validaNomCognoms(myName);//valido
        //compruebo
        if(!errorName){//correcto, no hay errores
            document.getElementById("errorN").innerHTML="";
            errorName=false;
            
        }else{//si hay problemas con el nombre introducido
            document.getElementById("errorN").innerHTML="Vuelve a introducir tu nombre. Sólo se permiten letras";
        }
        comprovaBoto();
    });
    document.getElementById("tuApellidos").addEventListener("blur", function(){
        mySurname=document.getElementById("tuApellidos").value;//recojo lo que hay dentro del campo nombre
        errorApellidos=validaNomCognoms(mySurname);//valido
    //compruebo
        if(!errorApellidos){//correcto, no hay errores
            document.getElementById("errorA").innerHTML="";
            errorApellidos=false;
           
        }else{//si hay problemas con el nombre introducido
            document.getElementById("errorA").innerHTML="Vuelve a introducir tus apellidos. Sólo se permiten letras";
        }
        comprovaBoto();
    });
    document.getElementById("tuEmail").addEventListener("blur", function(){
        myEmail=document.getElementById("tuEmail").value;//recojo lo que hay dentro del campo nombre
        var pattern=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;//valido
    //compruebo
	 
        if(pattern.test(myEmail)){//correcto
            document.getElementById("errorE").innerHTML="";
            errorEmail=false;
           
        }else{//si hay problemas con el nombre introducido
            document.getElementById("errorE").innerHTML="Vuelve a introducir tu email. Formato incorrecto";
			errorEmail=true;
        }
        comprovaBoto();
    });

    document.getElementById("tuDni").addEventListener("blur", function(){
        myDni=document.getElementById("tuDni").value;//recojo lo que hay dentro del campo nombre
        validaDni(myDni);
        comprovaBoto();
    });

    document.getElementById("tuNac").addEventListener("focusout", function(){
        myBirth=document.getElementById("tuNac").value;//recojo lo que hay dentro del campo nombre
        var pattern=/^\d{4}([-])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
		if(pattern.test(myBirth)){//passa el test
			
			var fecha=new Date(myBirth);
			var msegFecha=fecha.getTime();
			var msegToday=Date.now();

			if(msegToday<msegFecha){
				errorFecha=true;//hay error
				document.getElementById("errorDa").innerHTML="La teva data de naixement ha de ser inferior a la data d'avui";
			}else{
				document.getElementById("errorDa").innerHTML="";
                errorFecha=false;
               
			}
					
        }
		else{
			errorFecha=true;//hay error
			document.getElementById("errorDa").innerHTML="Formato incorrecto";
		}
        comprovaBoto();
    });
   
});
    
      
function comprovaBoto(){
   
    if(!errorName && !errorApellidos && !errorEmail && !errorDni && !errorFecha){
       document.getElementById("btRegistro").disabled=false;
       p =document.createElement("p");
       p.id="dinamic";
       p.innerHTML="Afegeix aquí el missatge que vulguis concatenant amb les variables que vulguis";
       document.getElementById("respuesta").appendChild(p);
    }else{
        document.getElementById("btRegistro").disabled=true;
        document.getElementById("respuesta").innerHTML="";
    }
}

function validaNomCognoms(value){

    var pattern=/^[A-ZÑa-zñáéíóúàèòÁÉÍÓÚÀÈÒ'çÇ ]+$/;//este patron o cualquier otro
    if(pattern.test(value)){
        return false;//correcto, no hay errores
    }{
        return true;//hay errores!!!
    }
 
       
}


function validaDni(dni){
     
    if(dni.length==9){
        
        let numero=dni.substring(0,8);
        let letra=dni.substr(dni.length-1,1);
       
        if(isNaN(numero) || !isNaN(letra)){
            document.getElementById("errorD").innerHTML="Formato incorrecto";
            errorDni=true;//existe un error
        }else{
            let calculo=numero % 23;//numero entre 0 i 22
           
            let letras="TRWAGMYFPDXBNJZSQVHLCKE";
            
            if(letra.toUpperCase()==letras[calculo]){
                document.getElementById("errorD").innerHTML="";
                errorDni=false;//no hay error
            }else{
                document.getElementById("errorD").innerHTML=`Tu dni ${dni} es falso`;
                errorDni=true; //existe un error
            }
        }
        
    }else{
        document.getElementById("errorD").innerHTML="Tamaño incorrecto";
        errorDni=true; //existe un error
    }
    
}

