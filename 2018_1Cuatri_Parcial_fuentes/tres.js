function mostrar()
{
    var precio;
    var descuento;
    var precioDescuento;
    var Porcentajedescuento
    

    precio =parseFloat (prompt ("Ingrese el precio del producto"));
    Porcentajedescuento=parseFloat (prompt("Ingrese el descuento"));

    descuento= precio * Porcentajedescuento /100;
    precioDescuento = precio - descuento;

    document.getElementById("elPrecioFinal").value= precioDescuento;
   




}
