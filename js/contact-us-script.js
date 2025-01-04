//Primer evento: en el submit del formulario, cancelo el envío y saco una alerta para el usuario
document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault(); //Evitar el envío de formulario
    let inputNombre = document.getElementById("nombre").value;
    let inputCorreo = document.getElementById("correo").value;

    let mensaje = `Lo sentimos ${inputNombre} con email: ${inputCorreo}, no podemos enviar este formulario porque no tenemos un endpoint al que enviar estos datos.`
    alert(mensaje);
});

//Segundo evento: en el onchange del campo "Describe brevemente tu proyecto", resalto en rojo el campo si el mensaje
//excede los 200 caracteres

const descripcionProyecto = document.getElementById("mensaje");

descripcionProyecto.addEventListener("change", () => {

    if (descripcionProyecto.value.length >= 500) {
        alert("Has excedido los 500 caracteres, por favor, reduce el tamaño de tu mensaje");
        descripcionProyecto.classList.add('error');
    } else {
        descripcionProyecto.classList.remove('error');
    }
});
