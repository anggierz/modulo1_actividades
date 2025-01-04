//Instrucciones: Se puede jugar con los datos de la campaña pero respetando la manera de pasar datos al constructor del objeto

let campanaEsplucat = new DatosCampanas(20000, 14000, 20, "2025-12-31T00:00:00");


///<summary>Función constructora del objeto camapaña</summary>
///<param name="objetivoEconomico" type="Number">Dinero a recaudar para la campaña</param>
///<param name="fechaFinalizacion" type="Date">Fecha en la que finaliza la campaña. Formato Date: ISO 8601 en zona horaria Madrid. Ejemplo: YYYY-MM-DDTHH:mm:ss.sssZ</param>
///<returns type="void"/>
function DatosCampanas(objetivoEconomico, cantidadRecaudada, colaboradores, fechaFinalizacion) {
    this.objetivoEconomico = objetivoEconomico;
    this.cantidadRecaudada = cantidadRecaudada;
    this.colaboradores = colaboradores;
    this.fechaFinalizacion = fechaFinalizacion;
}

//Métodos DOM

document.addEventListener("DOMContentLoaded", cuentaRegresiva(campanaEsplucat.fechaFinalizacion));

const botonDonacion = document.getElementById("boton-donaciones");
botonDonacion.addEventListener("click", () => {
  recibirDonacion();
});



//Funciones de la página index.html (Actividades 4b y 4d)

///<summary>Función que añade el contador de campaña al DOM</summary>
///<param name="fechaFin" type="Date">Fecha en la que finaliza la campaña</param>
///<returns type="void"/>
function cuentaRegresiva(fechaFin) {
    var fechaFinalizacion = new Date(fechaFin).getTime();

  var contador = setInterval(function() {
    var fechaActual = new Date().getTime();
    var tiempoRestante = fechaFinalizacion - fechaActual;

    var days = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    var hours = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    document.getElementById("tiempo-restante").innerHTML = "Tiempo restante de campaña: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    //Tiempo < 0 significa que la campaña ha finalizado
    if (tiempoRestante < 0) {
      clearInterval(contador);
      document.getElementById("tiempo-restante").innerHTML = "Recaudación Finalizada";
    }
  }, 1000);
}

///<summary>Función que salta al darle al botón "Dona Ahora" de la campaña Esplucat. Este recibe la donación
// a partir de un prompt a usuario</summary>
///<returns type="void"/>
function recibirDonacion() {

  debugger;
  let cantidadValidada = false;
  let cantidadPendientePorRecaudar = campanaEsplucat.objetivoEconomico - campanaEsplucat.cantidadRecaudada;
  let campanaFinalizada = cantidadPendientePorRecaudar == 0 ||
    (new Date(campanaEsplucat.fechaFinalizacion).getTime() - new Date().getTime()) < 0 ? true : false;

  if (campanaFinalizada)
    alert("La campaña ha finalizado o ha alcanzado su objetivo. No se permiten más donaciones");

  while (!cantidadValidada && !campanaFinalizada) {

    var userInput = prompt("Por favor, indica la cantidad que quieres donar a esta campaña: ");

    if (userInput == null || userInput == "") {
      console.log("Se ha cancelado la acción");
      return;
    }
    var cantidad = parseInt(userInput);

    if (isNaN(cantidad)) {
      console.log("La cantidad introducida no es un número. Prueba de nuevo");
      continue;
    }

    if (cantidad <= 0) {
      console.log("Cantidad inválida. Prueba de nuevo");
      continue;
    }

    if (cantidad > cantidadPendientePorRecaudar) {
      console.log("Cantidad supera el límite del objetivo. Prueba de nuevo");
      continue;
    }

    cantidadValidada = true;
  }


  //Cuando se pasan todas las validaciones, se pasa a tener en cuenta la cantidad donada
  actualizarBarraProgreso(cantidad);

}


///<summary>Función que modifica los elementos del DOM: barra de progreso y colaboradores para tener en cuenta la donación</summary>
///<param name="cantidad" type="Number">Fecha en la que finaliza la campaña</param>
///<returns type="void"/>
function actualizarBarraProgreso(cantidad) {
  //Actualización barra progreso
  let barraDonacion = document.getElementById("progress-bar-completion");
  let barraDonacionLabel = document.getElementById("progress-bar-label");
  barraDonacion.value += cantidad;
  barraDonacionLabel.innerText = `${barraDonacion.value}€ recaudados`;

  //Actualización del número de colaboradores
  let colaboradores = document.getElementById("num-colaboradores");
  colaboradores.innerText = `${campanaEsplucat.colaboradores + 1} colaboradores`

  //Actualización del objeto de campaña Esplucat
  campanaEsplucat.cantidadRecaudada = barraDonacion.value;
  campanaEsplucat.colaboradores++;
}





