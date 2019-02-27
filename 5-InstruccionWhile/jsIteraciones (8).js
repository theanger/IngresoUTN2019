function Mostrar()
{

	
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';
	

	do {
		numero= parseInt (prompt("ingrese un numero"));

		while ( isNaN(numero)); { 
			numero= parseInt(prompt( "Eso no es un numero. Ingrese otro"));
		}

		if (numero >=0) {
			positivo = positivo + numero;


		}
		

		else {
			negativo = negativo + numero;
			contadorNeg++;

		}
		respuesta =prompt ( "desea continuar");
	
} while (respuesta== "s") || respuesta == "S");


document.getElementById('suma').value=positivo;
if(contadorNeg ==0) { 
	negativo=0;
	 }
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN