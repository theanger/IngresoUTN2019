function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while ( !(sexo == "f" || sexo == "m") ) //.tolowerCase( para trasnformar mayuscula en minuscula)
//while (sexo != "f" && sexo!= "m" && sexo != "M" && sexo != "F"  ))
 
  {   
sexo = prompt ("Error. Reingrese:");
 }





document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN