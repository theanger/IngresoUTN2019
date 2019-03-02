function mostrar()
{

    var numero1;
    var numero2;
    var suma;
    

    numero1 = parsefloat (prompt ("Ingrese el primer numero"));
    numero2= parseFloat (prompt( "ingrese el segundo numero"));

    if (numero1== numero2)  
    {   alert ("numero1" + "y"  + "numero2");

    }
    else
    {
        
         if ( numero1>numero2)
         {
            alert (numero1- numero2);
         }
         else
          {
            suma= numero1 + numero2;
            alert (suma);
            if (suma>10)
            {
                alert ("la suma es" + suma + "y supero el");
            } 
        }
    }
}