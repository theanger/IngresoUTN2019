/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var precio=35
    var descuento
    var marca
    var cantidad
    var preciofinal
    var preciocondescuento
    var iibb

    cantidad= parseInt (document.getElementById("Cantidad").value);
    marca=document.getElementById("Marca").value;

    if ( cantidad >= 6){
      descuento= precio * 50 /100;
         }
    
    else if (cantidad == 5)
          
       {  if (marca == ("ArgentinaLuz") 
          descuento = precio * 40/100;    
     }
     else {
         descuento = precio *30 /100  }

        else if (cantidad == 4) {

            if (marca== "ArgentinaLuz || marca == "FelipeLamparas")
             {
                descuento=precio *25 /100;
            } 
            else {
                descuento = precio *20 /100;


     }



    


        }  else if ( cantidad ==3)  {
            if (marca == "Argentinaluz")
            descuento= precio * 15/100

            else if (marca= "FelipeLamparas")
            descuento= precio *10/100


        } else {
            descuento= 0;
            
        }  preciocondescuento= precio - descuento

        document.getElementById("precioDescuento").value= preciocondescuento;

        importeFinal = cantidad + preciocondescuento

        if (importeFinal > 120) 
        iibb= importeFinal *10 /100
        importeFinal= importeFinal + iibb
        alert= ("importe a pagar" + importeFinal + "IIBB usted pago" + iibb)

        else
        alert( "importe a pagar"  +importeFinal); 
        








 	
}


     {    switch (cantidad)
         case 1:
         case 2:
         descuento =0
         break;

         case 3 
         if ( marca == "ArgentinaLuz")
         descuento = precio *15 /100  

         else if (marca == "FelipeLamparas")
         descuento = precio *10 /100;

         else 
         descuento = precio *5 /100
         break;

         case 4:
       if (marca == "Argentinaluz) || marca == "FelipeLamparas")

       else 
       descuento = precio *20 /100;
       break;

       case 5:
       if ( "marca== ArgentinaLuz")
       descuento == precio * 40 /100

       else 
       descuento = precio * 30/ 100;
       break;

       default;

       descuento= precio *50 /100;  



         
        
     }