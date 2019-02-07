/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	var x;
    var y;
    var resultado;
      x=document.getElementById ("numeroUno").value;
      y=document.getElementById ("numeroDos").value;

      x= parseInt (x);
      y= parseInt (y);
      resultado= x - y;

      alert ("El total es " + resultado );
}

function multiplicar()
{   var x;
    var y;
    var resultado;
     x=document.getElementById ("numeroUno").value;
     y=document.getElementById ("numeroDos").value;
     x= parseInt (x);
     y= parseInt (y);
     resultado= x * y;

     alert ("El total es " + resultado);
}

function dividir()
{
	var x;
    var y;
    var resultado;
    x=document.getElementById("numeroUno").value;
    y=document.getElementById("numeroDos").value;
     
    x= parseInt (x);
    y= parseInt (y);
    resultado= x / y;

    alert ("el total es  " + resultado); 
}

