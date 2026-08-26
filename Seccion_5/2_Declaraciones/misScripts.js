function evaluarCompras(CantidadDisponible){
    let elementoRespuesta = document.
    getElementById("decision");

    let elementoCantidad = document.
    getElementById("textoCantidad");
    let cantidadComprada = elementoCantidad.value;

    if (cantidadComprada <= CantidadDisponible) {
        elementoRespuesta.textContent = "Compraste " +cantidadComprada + "Hay disponibles aun " +
        (CantidadDisponible - parseInt(cantidadComprada)).toString();
    }
}