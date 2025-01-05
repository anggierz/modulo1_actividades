let indice = 0;
carruselImagenes();

function carruselImagenes() {
  let i;
  let imagenes = document.getElementsByClassName("myImages");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = "none";  
  }
  indice++;
  if (indice > imagenes.length) {indice = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  imagenes[indice-1].style.display = "block";  
  dots[indice-1].className += " active";
  setTimeout(carruselImagenes, 2000); // Imágenes cambian cada dos segundos, pero se puede modificar cambiando la función setTimeout
}