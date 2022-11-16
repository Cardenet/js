

document.addEventListener("DOMContentLoaded", function () {
   var name;
   var surname;
   var email;
   var fecha;
    //quan carrega la pagina esta desabilitat
    //es valida en sortir de cada camp
    document.getElementById("tuNombre").addEventListener("blur", function(){
        
    
    //haig de cridar als diferents validadors
    name=document.getElementById("tuNombre").value;
    var flag=validaNomCognoms(name);
    if (flag) {
        document.getElementById("errorN").innerHTML="";
    }
    else {
        document.getElementById("errorN").innerHTML="vuelve a introducir el nombre";
    }
    //si hi ha algun error, missatge d'error al camp corresponent i botó deshabilitat
    });
    document.getElementById("tuApellidos").addEventListener("blur",function(){
         
    surname=document.getElementById("tuApellidos").value;
    var flag2=validaNomCognoms(surname);
    if (flag2) {
        document.getElementById("errorA").innerHTML="";
    }
    else {
        document.getElementById("errorA").innerHTML="vuelve a introducir el apellido";
    }
    });
    document.getElementById("tuEmail").addEventListener("blur",function(){
         
        email=document.getElementById("tuEmail").value;
        var flag3=validaEmail(email);
        if (flag3) {
            document.getElementById("errorE").innerHTML="";
        }
        else {
            document.getElementById("errorE").innerHTML="vuelve a introducir el email";
        }
        });
        document.getElementById("tuDni").addEventListener("blur",function(){
         
            your_dni=document.getElementById("tuDni").value;
            var flag4=validaDni(your_dni);
            });
        document.getElementById("tuNac").addEventListener("focusout",function(){
            my_ann=document.getElementById("tuNac").value
            var fecha=new Date(my_ann)
            s_fechaC=fecha.getTime();
            // console.log(s_fechaC);
            fecha_hoy = new Date();
            s_fecha_hoy=fecha_hoy.getTime()
            // console.log(s_fecha_hoy);
            pep=  s_fecha_hoy - s_fechaC
            // console.log(pep)
            if(pep > 0){
                document.getElementById("errorDa").innerHTML=""; 
            } 
            else
            {
                document.getElementById("errorDa").innerHTML="no puedes nacer en el futuro";
            }
            checkYear = Math.floor(pep / 31536000000);
            document.getElementById("year").innerHTML=checkYear;
            if (checkYear < 125) {
                document.getElementById("max_year").innerHTML=""
            }
            else {
                document.getElementById("max_year").innerHTML="estas seguro que esa es tu edad?"
            }
            // console.log(fecha)
        });

    //si tot OK, botó s'habilita i es construeix dinàmicament el text que diu el teu nom i cognoms, email, dni, data de naixement, 
    //edat i dies que et falten per al teu aniversari
    
 });

    


function validaNomCognoms(value){
    var pattern=/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
    if (pattern.test(value)){
        return true
    }
    else {
        return false
    }
       
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
            document.getElementById("errorD").innerHTML="Formato incorrecto";
            flag=false;
        }else{
            let calculo=numero % 23;//numero entre 0 i 22
            console.log(calculo);
            let letras="TRWAGMYFPDXBNJZSQVHLCKE";
            //let letrasArray=Array("T","R",...);
            // console.log(letras[calculo]);//miro la letra de verdad
    
            if(letra.toUpperCase()==letras[calculo]){
                document.getElementById("errorD").innerHTML="";
            }else{
                document.getElementById("errorD").innerHTML=`Tu dni ${dni} es falso`;
                flag=false;
            }
        }
        
    }else{
        document.getElementById("errorD").innerHTML="Tamaño incorrecto";
        flag=false;
    }
    
}

