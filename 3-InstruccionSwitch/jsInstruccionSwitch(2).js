function Mostrar()
{
//tomo el mes 
var mesDelAnio = document.getElementById('mes').value;

//alert (mesDelAnio);



switch (mesDelAnio) {  

case "Enero":
case "Febrero":
case "Marzo":
case "Abril":
case "Mayo":
case "Junio":

alert ("Falta para el invierno");
break; 

case "Julio":
case "Agosto":

alert ("abrigate hace frio");
break;

case "Septiembre":
case "Octubre":
case "Noviembre":
case "Diciembre":
alert ( "ya pasamos el frio, ahora calor");
break; 

 }



}//FIN DE LA FUNCIÓN