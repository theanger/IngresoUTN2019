function Mostrar()
{

	//var contador=0;
	//var acumulador=0;
	//var respuesta='si';


//document.getElementById('suma').value=acumulador;
//document.getElementById('promedio').value=acumulador/contador;

var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;
	var promedio;

	do { 
		numero= parseInt ( prompt( "ingrese un numero  "));

		while (isNan(numero)) { 
			numero= parseInt (prompt ( "eso no es un numero correcto, ingrese otro")) ;

     }  acumulador = acumulador + numero;

		contador ++;
		respuesta= prompt ("Desea continuar? "); 

	}  while (respuesta == "s");
alert ( acumulador);

promedio= acumulador / contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/promedio;  

}//FIN DE LA FUNCIÓN