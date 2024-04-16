function alerta(){
    alert("Cargando Reporte de clima");
}
setTimeout(alerta,10);
let BuenosAires=document.querySelector("#Buenos-Aires");

    console.log(BuenosAires);

    BuenosAires.addEventListener("click",function(){
        console.log("CLICKEADO");

    document.getElementById("CDM1").style.display = "none";
    document.getElementById("buenosaires1").style.display= "block";
    document.getElementById("Santiago1").style.display= "none";
    document.getElementById("SP1").style.display= "none";
    document.getElementById("Quito1").style.display= "none";
   
    
    });
    let CDM=document.querySelector("#Ciudad-de-Mexico");

        console.log(CDM);

        CDM.addEventListener("click",function(){
        console.log("CLICKEADO");

        document.getElementById("buenosaires1").style.display = "none";
        document.getElementById("CDM1").style.display= "block";
        document.getElementById("Santiago1").style.display= "none";
        document.getElementById("SP1").style.display= "none";
        document.getElementById("Quito1").style.display= "none";
       
    });     
    let Sant=document.querySelector("#Santiago");

        console.log(Sant);

        Sant.addEventListener("click",function(){
        console.log("CLICKEADO");

        document.getElementById("buenosaires1").style.display = "none";
        document.getElementById("CDM1").style.display= "none";
        document.getElementById("Santiago1").style.display= "block";
        document.getElementById("SP1").style.display= "none";
        document.getElementById("Quito1").style.display= "none";
       
    });     
    let SP=document.querySelector("#Sao-Paulo");

    console.log(SP);

    SP.addEventListener("click",function(){
    console.log("CLICKEADO");

    document.getElementById("buenosaires1").style.display = "none";
    document.getElementById("CDM1").style.display= "none";
    document.getElementById("Santiago1").style.display= "none";
    document.getElementById("SP1").style.display= "block";
    document.getElementById("Quito1").style.display= "none";
   
});     
let Quit=document.querySelector("#Quito");

    console.log(Quit);

    Quit.addEventListener("click",function(){
    console.log("CLICKEADO");

    document.getElementById("buenosaires1").style.display = "none";
    document.getElementById("CDM1").style.display= "none";
    document.getElementById("Santiago1").style.display= "none";
    document.getElementById("SP1").style.display= "none";
    document.getElementById("Quito1").style.display= "block";
   
});
let A=document.querySelector("#f2");
console.log(A);
A.addEventListener("click",function(){
    console.log("click");
    A.remove();
})
