function calcularPromedio(){
    let respuesta = document.getElementById("Promedio");
    let notas = [7,4,8,9,6];
    let suma = 0;

    for (let nota of notas) {
        suma = suma + nota;
    }

    let promedio = suma / notas.length;

    respuesta.textContent =   promedio;
}
calcularPromedio();

function notaMasAlta(){
    let respuesta = document.getElementById("notaAlta");
    let notas = [7,4,8,9,6];
    let numero = 8;

    for (let numero of notas){
        if ( notas > 8 ){
            document.write(numero + "<br>");
        }
    }
}
notaMasAlta();