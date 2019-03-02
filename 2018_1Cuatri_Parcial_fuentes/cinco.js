function mostrar()
{

var planeta= prompt ("ingrese un planeta");

switch (planeta)
{
   case "mercurio":
case "Venus":

alert("ACA HACE CALOR");
break;
   case "tierra":
   alert ("aca vivmos");
   break;
   
   case "marte":
   case "jupiter":
   case "saturno":    
   case "urano":
   case "neptuno":
   case "pluton":
   alert ("aca hace mas frio")
   break;

   default:
   alert ("no ingreso un planeta valido");
}
 
}
