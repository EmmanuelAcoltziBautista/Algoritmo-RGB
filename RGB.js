function RGB(){
var RO=document.getElementById("ROJO").value;
var VE=document.getElementById("VERDE").value;
var AZ=document.getElementById("AZUL").value;
const color='rgb('+RO+','+VE+','+AZ+')';
var a=document.getElementById("Contenedor").style.backgroundColor=color;


let rojo=parseInt(RO);
let verde=parseInt(VE);
let azul=parseInt(AZ);
let sum=(rojo+verde+azul);



const suma=parseInt(sum);

if(suma>0 && suma<=85){
alert("Oscuro");
}
else if(suma>85 && suma<=382.5){
alert("Opaco");
}
else if(suma>382.5){
alert("Claro");
}



}