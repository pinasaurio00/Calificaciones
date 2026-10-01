function calcularPromedio() {

    // Obtener los datos del formulario

    let nombre = document.getElementById("nombre").value;
 
    let edad = document.getElementById("edad").value;
    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );

    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );

    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );
    
        let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );

    // Validar que los datos estén completos

    if (
        nombre === "" ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {

        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";

        return;
    }


    // Calcular promedio

    let promedio =
        (calificacion1 + calificacion2 + calificacion3+ calificacion4) / 4;


    // Mostrar resultado

    if (promedio >= 9) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>APROBADO" +
    "<br><br>Super Exelencia";

    } else if(promedio >= 8 && promedio < 9) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>ARPOBADO" + "<br><br>Muu bien";
    }else if(promedio >= 7 && promedio < 8) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>ARPOBADO" + "<br><br>Bien ahi";
    }else if(promedio >= 6.5 && promedio < 7) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>ARPOBADO" + "<br><br>Piensa en ciber";
    }else if(promedio >= 6 && promedio < 6.5) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>ARPOBADO" + "<br><br>Tira paro y date de baja";
    }else if(promedio >= 6 ) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Rebrobado" + "<br><br>vete a turismo";
    }





}
function limpiar() {

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("calificacion1").value = "";
    document.getElementById("calificacion2").value = "";
    document.getElementById("calificacion3").value = "";
    document.getElementById("calificacion4").value = "";
    document.getElementById("resultado").innerHTML = "";
}