function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch (mesDelAño) { 

case "Febrero":

alert ("Este mes tiene 28 dias");
break;              
 case "Abril":
 case "Junio":
 case "Septimebre":
 case "Noviembre":

 alert ("Este mes tiene tiene 30 dias");
 break;

 default:
 alert ( "Tienen 31 dias");

 

}
	 
	



}//FIN DE LA FUNCIÓN