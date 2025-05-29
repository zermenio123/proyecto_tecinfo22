const imagenCarrusel = document.getElementById('imagen-carrusel');
const imagenes = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg'];
let indiceActual = 0;

imagenCarrusel.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    imagenCarrusel.src = imagenes[indiceActual];
});
