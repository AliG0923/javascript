function recomendacion(genero) {
  
    let edad = Number(document.getElementById("textoEdad").value);
    let respuesta = document.getElementById("recomendacion");

    if (document.getElementById("textoEdad").value === "") {
        reiniciar ();
        return
    }

    let pelicula = "";

    switch (genero) {
        case "Drama":
            if (edad < 13) {
                pelicula = "Casablanca";
            } else if (edad <= 15) {
                pelicula = "The Shawshank Redemption";
            } else {
                pelicula = "Taxi Driver";
            }
            break;

        case "Comedia":
            if (edad < 13) {
                pelicula = "Back to the Future";
            } else if (edad <= 15) {
                pelicula = "The Truman Show";
            } else {
                pelicula = "The Wolf of Wall Street";
            }
            break;

        case "Musical":
            if (edad < 13) {
                pelicula = "La La Land";
            } else if (edad <= 15) {
                pelicula = "Les Misérables";
            } else {
                pelicula = "The Rocky Horror Picture Show";
            }
            break;

        case "Crimen":
            if (edad < 13) {
                pelicula = "No hay recomendaciones disponibles para menores de 13 años en este género.";
            } else if (edad <= 15) {
                pelicula = "El Secreto de sus Ojos";
            } else {
                pelicula = "The Godfather";
            }
            break;
    }


    respuesta.textContent = pelicula;
}

