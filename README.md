Este repositorio contiene tanto la actividad HTML como la actividad CSS del MÓDULO 1. FUNDAMENTOS DEL DESARROLLO WEB. HTML Y CSS
del máster de Desarrollo Web de la UEM.

IMPORTANTE: Esta rama incluye también la actividad de JS avanzado del MÓDULO 3. PROGRAMACIÓN EN JAVASCRIPT Y TYPESCRIPT. Se
ha reutilizado la página HTML y el CSS y a su vez se ha adaptado según las necesidades de la actividad, por lo que es posible
que algo del diseño no cuadre, pero en este caso importa la lógica.

A continuación, resumo donde se encuentran las funcionalidades:

4a) Gestionar eventos sobre los formularios: se puede encontrar esta lógica en la sección "Contacto" y más en concreto en el formulario. Se añade un evento a la hora de enviar el formulario para parar el envío e informar al usuario (utilizando
los datos introducidos por él).

Se añade otro evento en el change del campo "Describe brevemente tu proyecto" para comprobar si el mensaje excede los 500
caracteres, en caso afirmativo, se resalta el campo con un color rojo (añadiéndole la clase .error), en caso negativo,
se desmarca el campo.

4b) La barra de actualización se encuentra en la página principal (Inicio) dentro de la campaña Esplucat.

Funciona de la siguiente manera:

 - Se crea el objeto datos de campaña Esplucat con: objetivo recaudación, cantidad recaudada, colaboradores/donantes y fecha
 de finalización de la campaña. Estos datos pueden ser modificados por el usuario que pruebe la funcionalidad.

 -Al darle al botón "Dona Ahora" de la campaña Esplucat, se hace un prompt al usuario pidiendo la cantidad a donar. Se añaden
 validaciones para comprobar que se introduce un número válido, que la donación no excede la cantidad pendiente a recaudar y que
 la campaña no esté finalizada.

 -Pasadas las validaciones, se tiene en cuenta la donación y se modifica la barra de progreso y el número de colaboradores así
 como el objeto datos de campaña Esplucat para tener los datos al día y permitir al usuario ir haciendo donaciones hasta llegar
 al objetivo.


 4c) El carrusel de imágenes se encuentra en la página de "Sobre nosotros".


 4d) El reloj de cuenta regresiva se encuentra en la página principal (Inicio) dentro de la campaña Esplucat.

Consiste en una función que se va ejecutando cada segundo y que a partir de la fecha de finalizacion (definida en el objeto
datos de campaña Esplucat) y la fecha actual, calcula el tiempo restante que queda para llegar a dicha fecha fin. Esta información se pinta para el usuario mostrando los días, horas, minutos y segundos restantes. Cuando se llega a la fecha fin, 
se muestra el mensaje "Campaña finalizada".