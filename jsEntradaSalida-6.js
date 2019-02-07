/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var x;
    var y;
    var resultado;
      x=document.getElementById ("numeroUno").value;
      y=document.getElementById ("numeroDos").value;

      x= parseInt (x);
      y= parseInt (y);
      resultado= x + y;

      alert ("El total es " + resultado );



}

