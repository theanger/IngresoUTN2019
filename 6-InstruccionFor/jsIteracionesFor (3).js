function Mostrar()
{


var repetciones = prompt("ingrese el número de repeticiones");

while (isNaN( repeticiones)) {  

repeticiones= parseInt ( prompt("eso no es correcto"));
 }  

for (var i = 0 ; i < repeticiones; i++) {
     console.log ( "hola utn fra");
}


  
}//FIN DE LA FUNCIÓN