function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while( contador < 5) {
		numero = parseInt(prompt("ingrese un numero: "));

      acumulador = acumulador + numero;

		contador ++;

	}
alert ( acumulador);


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN