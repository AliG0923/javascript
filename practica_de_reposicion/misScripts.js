function actividad (recomendacionAdecuada){
    let disponibilidad = Number(document.getElementById("UsuarioPresupuesto").value);
    let respuesta = document.getElementById("recomendacion");
    let numeroPersonas = Number(document.getElementById("numeroPersonas").value);
    let cantidadPersonas = document.getElementById("cantidadPersonas");
    let textoDescuento = document.getElementById("descuento"); 




    let salida = "";
    let txtdescuento = 0;

    if (numeroPersonas >= 1 && numeroPersonas <= 4) {
        txtdescuento = 0; 
    } else if (numeroPersonas <= 8) {
        txtdescuento = 10; 
    } else {
        txtdescuento = 15;  
    }
    
    

    switch(recomendacionAdecuada){
        case 'deportes':
            if (disponibilidad <4000){
                salida = "caminata recreativa";
            } else if (disponibilidad <= 15000){
                salida = "alquiler de cancha";
            }else {
                salida = "actividad deportiva";
            }
            break;

        case 'entretenimiento':
            if(disponibilidad <4000){
                salida ="actividad economica";
            }else if (disponibilidad <=15000){
                salida = "entrada al cine";
            } else {
                salida = "concierto o espectaculo";
            }
            break;

        case 'turismo':
            if(disponibilidad <4000){
                salida = "visita a parque publico";
            }else if (disponibilidad <=15000){
                salida = "tour local";
            } else {
                salida = "excursion de dia completo";
            }
            break;

        case 'actividadesFamiliares':
            if (disponibilidad <4000){
                salida = "pinic familiar";
            } else if (disponibilidad <=15000){
                salida = "salida recreativa";
            } else {
                salida = "parque tematico o actividad especial";
            }
            break;


            
        
    }
    respuesta.textContent = salida; 
    cantidadPersonas.textContent = numeroPersonas;    
    textoDescuento.textContent = txtdescuento + "%"; 
}

