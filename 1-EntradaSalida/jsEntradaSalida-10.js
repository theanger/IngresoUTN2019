/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    var sueldo
    var nuevosueldo;

    var aumento;

    sueldo= parseFloat (document.getElementById("importe").value);

    aumento= sueldo * 0.25
    nuevosueldo= sueldo - aumento; 

    document.getElementById("resultado").value= aumento


    alert ("el resultado es "  + Nuevosueldo );
	
}
