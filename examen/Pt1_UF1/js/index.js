document.addEventListener('DOMContentLoaded',  function(){
  var today= new Date();
  var now= today.toLocaleDateString("en-GB");
  document.getElementById("dia").innerHTML=now;
  document.getElementById("log").style.display="none";
  document.getElementById("reg").style.display="none";
  document.getElementById("inicia_sessio").style.display="none";
  document.getElementById("registra_sessio").style.display="none";
  document.getElementById("vuelo").style.display="none";
  document.getElementById("busqueda").style.display="none";
  document.getElementById("reservar").style.display="none";
  document.getElementById("data_vuelo").style.display="none";
  document.getElementById("login").addEventListener("click",function(){
    document.getElementById("reg").style.display="none";
    document.getElementById("log").style.display="block";
    document.getElementById("registra_sessio").style.display="none";
    document.getElementById("inicia_sessio").style.display="block";





  });
  document.getElementById("inicia_sessio").addEventListener("click", function(){
    var name=document.getElementById("userName").value;
    var password=document.getElementById("password").value;
    let user1={ //objecte
      nom: name,
      contrasenya: password
    };

    console.log(user1)

    let xhr=new XMLHttpRequest();
    xhr.open("POST", "./php/server.php");//obrir connexio
    xhr.send(JSON.stringify(user1));//enviament de dades: objeto a JSON antes del envio
    xhr.onload=function(){//esperar a rebre dades

        if (xhr.status != 200) { // analiza el estado HTTP de la respuesta
            alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado
          } else { // muestra el resultado
            // alert(`Hecho, obtenidos ${xhr.response.length} bytes`); // Respuesta del servidor
            //xhr.response es un JSON que viene desde PHP
            let responseServer= JSON.parse(xhr.response);//reconvertirlo/parsearlo a variable JS
            document.getElementById("respuesta").innerHTML= responseServer;
            if(responseServer !="¡Usuario o contraseña incorrectos!"){
              checkCookie("cookie",name)
              document.getElementById("sesion").style.display="none";
              document.getElementById("vuelo").style.display="block";
              venir_php()
            }

          }
        }
  });

  document.getElementById("register").addEventListener("click",function(){
    document.getElementById("log").style.display="none";
    document.getElementById("inicia_sessio").style.display="none";
    document.getElementById("reg").style.display="block";
    document.getElementById("registra_sessio").style.display="block";
    document.getElementById("registra_sessio").addEventListener("click", function(){
      var Newname=document.getElementById("NewuserName").value;
      var Newpassword=document.getElementById("Newpassword").value;
      let user2={ //objecte
        nom: Newname,
        contrasenya: Newpassword
      };

      console.log(user2)

      let xhr=new XMLHttpRequest();
      xhr.open("POST", "./php/server2.php");//obrir connexio
      xhr.send(JSON.stringify(user2));//enviament de dades: objeto a JSON antes del envio
      xhr.onload=function(){//esperar a rebre dades

          if (xhr.status != 200) { // analiza el estado HTTP de la respuesta
              alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado
            } else { // muestra el resultado
              // alert(`Hecho, obtenidos ${xhr.response.length} bytes`); // Respuesta del servidor
              //xhr.response es un JSON que viene desde PHP
              console.log(xhr.response)
              let responseServer= JSON.parse(xhr.response);//reconvertirlo/parsearlo a variable JS
              document.getElementById("respuesta").innerHTML= responseServer;
              if(responseServer =="Ahora estas registrado"){
                document.getElementById("sesion").style.display="none";
                document.getElementById("vuelo").style.display="block";
              }


            }
      }
    })



  });
  document.getElementById("cercar_vol").addEventListener("click",function(){
    var origen=document.getElementById("origen").value;
    document.getElementById("info_ida").innerHTML=origen;
    var destinacio=document.getElementById("destinacio").value;
    document.getElementById("info_vuelta").innerHTML=destinacio;
    var ida=document.getElementById("fecha_ida").value;
    document.getElementById("info_fecha_ida").innerHTML=ida;
    var day_ida = new Date(ida);
    var ida_day = day_ida.toString().split(' ')[0];
    var vuelta=document.getElementById("fecha_vuelta").value;
    document.getElementById("info_fecha_vuelta").innerHTML=vuelta;
    var day_vuelta = new Date(vuelta);
    var vuelta_day= day_vuelta.toString().split(' ')[0];
    var pasajeros=document.getElementById("pasajeros").value;
    document.getElementById("info_pasajeros").innerHTML=pasajeros;
      let datos_vuelo={ //objecte
        ida_day:ida_day,
        vuelta_day:vuelta_day,
        start: origen,
        end: destinacio,
        start_date: ida,
        end_date:vuelta,
        people:pasajeros

      };
      // if((origen =="") && (destinacio == "") && (ida == "") && (vuelta == "") && (pasajeros == "")){
      //      // header("Location: ../busqueda.html") ;
      //       alert("Rellena todos los campos")
      //     }  else {
            
         
      let xhr=new XMLHttpRequest();
      xhr.open("POST", "./php/vuelo.php");//obrir connexio
      xhr.send(JSON.stringify(datos_vuelo));//enviament de dades: objeto a JSON antes del envio
      xhr.onload=function(){//esperar a rebre dades

          if (xhr.status != 200) { // analiza el estado HTTP de la respuesta
              alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado
            } else { // muestra el resultado
              // alert(`Hecho, obtenidos ${xhr.response.length} bytes`); // Respuesta del servidor
              //xhr.response es un JSON que viene desde PHP
              console.log(xhr.response)
              let responseServer= JSON.parse(xhr.response);//reconvertirlo/parsearlo a variable JS
              console.log(responseServer);
              let duracio= responseServer["Durada"];
              document.getElementById("info_duracio").innerHTML= duracio;
              let preu= responseServer["Preu"];
              document.getElementById("info_preu").innerHTML= preu;
              document.getElementById("duracio").innerHTML= duracio;
              document.getElementById("preu").innerHTML= preu
              //  if(responseServer !=""){
              //     document.getElementById("sesion").style.display="none";
              //     document.getElementById("vuelo").style.display="none";
              //     document.getElementById("busqueda").style.display="block";
              //  }

              


            }
      }
      let sal = new XMLHttpRequest();
      sal.open("POST", "./php/ida.php");
      sal.send(JSON.stringify(datos_vuelo));
      sal.onload = function() {

              if (sal.status != 200) {
                  alert(`Error ${sal.status}: ${sal.statusText}`);
              } else {
                  let responseServer = JSON.parse(sal.response);
                  document.getElementById("epiteto").innerHTML = responseServer;
                  var data = JSON.parse(sal.response);

                  for (var i = 0; i < data.length; i++) {
                      var option = document.createElement("option");
                      option.value = data[i];
                      option.innerHTML = data[i];
                      document.getElementById("salidas").appendChild(option)
                  };


              }
          }

      let vuel = new XMLHttpRequest();
      vuel.open("POST", "./php/vueltas.php");
      vuel.send(JSON.stringify(datos_vuelo));
      vuel.onload = function() {

          if (vuel.status != 200) {
              alert(`Error ${vuel.status}: ${vuel.statusText}`);
          } else {
              let responseServer = JSON.parse(vuel.response);
              document.getElementById("epiteto1").innerHTML = responseServer;
              var data = JSON.parse(vuel.response);

              for (var i = 0; i < data.length; i++) {
                  var option = document.createElement("option");
                  option.value = data[i];
                  option.innerHTML = data[i];
                  document.getElementById("vueltas").appendChild(option)
              };



          }
      }
      if ((ida_day == "Mon") || (ida_day == "Fri") || (ida_day == "Sat")) {
        disponible = true;
    } else {
        disponible = false;
    }

    if ((vuelta_day == "Mon") || (vuelta_day == "Fri") || (vuelta_day == "Sat")) {
        dis = true;
    } else {
        dis = false;
    }
    console.log(dis);
    console.log(disponible);
    ///
    if (origen == "" || destinacio == "" || ida == "" || vuelta == "" || pasajeros == "") {
        alert("rellene los campos para poder continuar")
    } else if (origen == destinacio) { alert("No puedes volar al mismo lugar") } else {
        if ((disponible == true) && (dis == true)) {
          document.getElementById("vuelo").style.display="none";
          document.getElementById("busqueda").style.display="block";
            // salidas(dayName);
        } else {
            alert("Solo hay vuelos disponibles lunes, viernes y sabados")
        }
    }
  });
  document.getElementById("comprar").addEventListener("click", function() {
    document.getElementById("busqueda").style.display="none";
    document.getElementById("reservar").style.display="block";
  })
  document.getElementById("nom_cognom").addEventListener("blur", function(){
        
    
    //haig de cridar als diferents validadors
    var name=document.getElementById("nom_cognom").value;
    
    var flag=validaNomCognoms(name);
    if (flag) {
        document.getElementById("errorN").innerHTML="";
    }
    else {
        document.getElementById("errorN").innerHTML="vuelve a introducir el nombre";
    }
    //si hi ha algun error, missatge d'error al camp corresponent i botó deshabilitat
    });
  document.getElementById("mail").addEventListener("blur",function(){
       
      email=document.getElementById("mail").value;
      var flag3=validaEmail(email);
      if (flag3) {
          document.getElementById("errorE").innerHTML="";
      }
      else {
          document.getElementById("errorE").innerHTML="vuelve a introducir el email";
      }
      });
  document.getElementById("dni").addEventListener("blur",function(){
       
          your_dni=document.getElementById("dni").value;
          var flag4=validaDni(your_dni);
          });

  document.getElementById("reservar_vuelo").addEventListener("click", function() {
    document.getElementById("reservar").style.display="none";
    document.getElementById("data_vuelo").style.display="block";
    var your_nom_cognom=document.getElementById("nom_cognom").value;
    document.getElementById("info_nom_cognom").innerHTML=your_nom_cognom;
    var your_dni=document.getElementById("dni").value;
    document.getElementById("info_dni").innerHTML=your_dni;
    var your_mail=document.getElementById("mail").value;
    document.getElementById("info_mail").innerHTML=your_mail;
    var your_phone=document.getElementById("telefono").value;
    document.getElementById("info_telefono").innerHTML=your_phone;
  });
  document.getElementById("logout").addEventListener("click",function(){
    borrarCookie("cookie")
  });
  document.getElementById("imprimir").addEventListener("click",function(){
    window.print()
  });
  });
  function Reloj(){
    // const d = new Date();
    // document.getElementById("demo").innerHTML = d.toLocaleTimeString();
     momentoActual = new Date()
     hora = momentoActual.getHours()
     minuto = momentoActual.getMinutes()
     segundo = momentoActual.getSeconds()

     horaImprimible = hora + " : " + minuto + " : " + segundo

     document.form_reloj.reloj.value = horaImprimible

     setTimeout("Reloj()",1000)
};
function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";"  + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(namecookie,nameuser) {
  let username = getCookie(namecookie);
  if (username == "") {
      setCookie(namecookie,nameuser)
  }
}
const borrarCookie = (cookie) => {
 document.cookie = "cookie=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
}
function venir_php(){
  let request = new XMLHttpRequest()
  request.open("GET","./php/ciudades.php");
  request.send();
  request.onload = function (){
      var data= JSON.parse(request.response);

      for(var i=0;i < data.length;i++){
          var option = document.createElement("option");
          option.value =  data[i];
          option.innerHTML = data[i];
          document.getElementById("origen").appendChild(option)
      };

      for(var i=0;i < data.length;i++){
          var option = document.createElement("option");
          option.value =  data[i];
          option.innerHTML = data[i];
          document.getElementById("destinacio").appendChild(option)
      };
  }


}

function validaNomCognoms(value) {
  var patternom = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
  if (patternom.test(value)) {
      return true;
  } else {
      return false;
  };

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
              document.getElementById("errorD").innerHTML=`Tu dni ${dni} es erroneo`;
              flag=false;
          }
      }
      
  }else{
      document.getElementById("errorD").innerHTML="Tamaño incorrecto";
      flag=false;
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





