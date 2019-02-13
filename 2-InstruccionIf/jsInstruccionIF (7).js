function Mostrar()
{
//tomo la edad  
 var años;
 var solo;

 años= document.getElementById("edad").value;
   solo=document.getElementById("estadoCivil").value;

   if ( años<18 && solo== "Soltero")


   alert ("Es muy menor para ser soltero.");
	


}//FIN DE LA FUNCIÓN