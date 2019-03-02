
function mostrar()
{ 

    var largo;
    var ancho;
    var perimetro;
    largo= prompt ("ingrese el largo");
    ancho= prompt ( "ingrese el ancho");

    largo = parseFloat (largo);
    ancho= parseFloat ( ancho);

    perimetro = ancho + ancho + largo + largo;

    alert ("El perimetro es "  + perimetro);

}
