//Métodos del DOM

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('formulario').addEventListener('submit', validacionFormulario('formulario'));
});

//Funciones JS de la página HTML contact-us (Actividad 4a)
function validacionFormulario(formularioId)
{
    debugger;
    const formulario = document.getElementById(formularioId);
    const camposTexto = formulario.querySelectorAll('input[type="text"]');

    camposTexto.forEach( (campo) => comprobarInputsVacios(campo));

    const camposEmail =  document.querySelectorAll('input[type="email"]');

    camposEmail.forEach( (campo) => comprobarInputsVacios(campo));
        

}

function comprobarInputsVacios(input)
{

    debugger;
    if (input.value.trim().length === 0) {

        input.classList.add('error');
    }
    else {
        input.classList.remove('error');
    }
}