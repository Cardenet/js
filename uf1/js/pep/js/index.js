
 document.addEventListener("DOMContentLoaded", function () {
    //creació objectes
    var fligth={
        airline:"Ryanair",
        number:545,
        departure:{
            time:"2022-10-04",
            city:"Madrid"
        },
    
     fullfligth : function(){
         return this.airline+" "+ this.number;
     },};
    //var elmeuvol=new vol();//concepte tradicional objecte
     var cat={};
     cat.name="Lola"
     cat.species="Russo de ojos azules"
     cat.age=3

    //canvis valors
    fligth.airline="vueling"
    fligth["number"]=666
    
    //Escriure valors
    document.getElementById("pep").innerHTML=fligth.departure.city;
    document.getElementById("pep2").innerHTML = fligth.fullfligth();
    //json = JavaScript Object Notation---->object js "modificat" a string
    var avatar='{"name":"Pepe", "life":999999}';
    console.log(avatar);
    console.log(typeof avatar);

    //JS me da 2 funciones relacionadas a js
    var user=JSON.parse(avatar);//cadena JSON a objecte
    console.log(user);
    console.log(typeof user);

    var mycat=JSON.stringify(cat);//objecte a JSON
    console.log(cat);

});