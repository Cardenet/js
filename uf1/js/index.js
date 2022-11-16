
document.addEventListener("DOMContentLoaded",function(){
    //codigo
    document.getElementById("div1").innerHTML="El <b>texto</b> lo he cambiado"; //te permite modificar texto

    document.getElementById("div2").innerText+="El <b>texto</b> lo he cambiado"; //te permite añadir  texto pero no modifica

    // document.write("holaaaa"); //te permite escribir texto

    // cambios estilos

    document.getElementById("div1").style.backgroundColor="green";

    // document.getElementById("p1").addEventListener("click",function(){document.getElementById("p1").innerHTML +=" BARÇA";})

    document.getElementById("p1").addEventListener("click",function(){document.getElementById("p1").style.display="none";});

    document.getElementById("btazul").addEventListener("click",function(){
        // quiero añadir la clase azul al div 2
        // document.getElementById("div2").classList.add("azul")

        // lo mismo en todos los div de la pagina html
        // las variables son: let
        let divs = document.getElementsByTagName("div");// tenemos 3 div es un array

        // bucles
        for(let i=0;i<divs.length;i++){
            divs[i].classList.remove("rojo")
            divs[i].classList.add("azul")
        }
    });

    document.getElementById("btrojo").addEventListener("click",function(){
        // quiero añadir la clase azul al div 2
        // document.getElementById("div2").classList.add("azul")

        // lo mismo en todos los div de la pagina html
        // las variables son: let
        let divs = document.getElementsByTagName("div");// tenemos 3 div es un array

        // bucles
        for(let i=0;i<divs.length;i++){
            divs[i].classList.remove("azul")
            divs[i].classList.add("rojo")
        }
    });
});