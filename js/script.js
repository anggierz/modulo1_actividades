//Instrucciones: Se puede jugar con los datos de la campaña pero respetando la manera de pasar datos al constructor del objeto

///<summary>Función constructora del objeto camapaña</summary>
///<param name="objetivoEconomico" type="Number">Dinero a recaudar para la campaña</param>
///<param name="fechaFinalizacion" type="Date">Fecha en la que finaliza la campaña. Formato Date: ISO 8601 en zona horaria Madrid. Ejemplo: YYYY-MM-DDTHH:mm:ss.sssZ</param>
///<returns type="void"/>
let campanaEsplucat = new DatosCampanas(2000, "2025-12-31T00:00:00");

function DatosCampanas(objetivoEconomico, fechaFinalizacion) {
    this.objetivoEconomico = objetivoEconomico;
    this.fechaFinalizacion = fechaFinalizacion;
}

//Métodos DOM

document.addEventListener("DOMContentLoaded", cuentaRegresiva(campanaEsplucat.fechaFinalizacion));


//Funciones de la página index.html

///<summary>Función que añade el contador de campaña al DOM</summary>
///<param name="fechaFin" type="Date">Fecha en la que finaliza la campaña</param>
///<returns type="void"/>
function cuentaRegresiva(fechaFin) {
  debugger;
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




