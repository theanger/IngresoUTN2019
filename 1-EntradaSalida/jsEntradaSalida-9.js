/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo;
    var nuevosueldo;

    var aumento;

    sueldo= parseFloat (document.getElementById("sueldo").value);

    aumento= sueldo * 10 / 100;
    nuevosueldo= sueldo + aumento; 

    document.getElementById("resultado").value= aumento


    alert ("el resultado es" + aumento);


    




}
