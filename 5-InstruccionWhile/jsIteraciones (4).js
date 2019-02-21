function Mostrar()
{
var num
	var numero = parseInt (prompt("ingrese un número entre 0 y 10."));

	

//while ( numero < 0 || numero < 10 || isNaN (numero) )
while ( !(numero >=0 && numero <=10))

//while ( clave !="utn750")
 
  {   
numero = parseInt (prompt ("Error. Reingrese:"));
 }

document.getElementById("Numero").value =numero;

}//FIN DE LA FUNCIÓN