// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Seleccionamos los elementos usando los ID que les pusimos
const btnTema = document.getElementById('btn-tema');
const iconoTema = document.getElementById('icono-tema');
const body = document.body;

// Le decimos al botón que escuche cuando hagamos clic
btnTema.addEventListener('click', () => {

    // 1. Alternamos los colores de toda la página (Fondo oscuro y texto blanco)
    body.classList.toggle('bg-gray-900');
    body.classList.toggle('text-white');

    // 2. Invertimos los colores del botón para que contraste
    btnTema.classList.toggle('bg-black');
    btnTema.classList.toggle('text-white');
    btnTema.classList.toggle('bg-white');
    btnTema.classList.toggle('text-black');

    // 3. Cambiamos el icono de Bootstrap (Luna a Sol, y viceversa)
    iconoTema.classList.toggle('bi-moon-fill');
    iconoTema.classList.toggle('bi-sun-fill');
});
