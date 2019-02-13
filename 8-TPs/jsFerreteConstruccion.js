/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo
    var ancho
    var perimetro
    var alambre

    largo=parseFloat (document.getElementById("Largo").value);
    ancho=parseFloat (document.getElementById("Ancho").value);
     
     perimetro= largo + ancho + largo + ancho;
     alambre= perimetro * 3;

     alert("La cantidad de alambre que se precisa es  " + alambre);



}
function Circulo () 

{
    
    var perimetro;
    var alambre;
    var radio;

   radio=parseFloat (document.getElementById("Radio").value);
     
     perimetro= 2 * Math.PI + radio; 
     alambre= perimetro *3;

     alert("La cantidad de alambre que se precisa es" + alambre);
	
}
function Materiales () 
{
    var largo
    var ancho

    var cemento
    var cal
    
    largo= document.getElementById("Largo").value;
    ancho= document.getElementById("ancho").value;

    superficie= largo * ancho;

    cal= superficie * 3;
    cemento = superficie * 2;
    alert( "hay una superficie de" + superficie + "m2 se necesitan" + cal + "bolsas de cal y "  + cemento);
	
}