// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener('DOMContentLoaded', function () {
    const cambiarColorBoton = document.getElementById('cambiarColorBoton');
    const body = document.body;

    cambiarColorBoton.addEventListener('click', function () {
        // Cambia el fondo del body a un color diferente (por ejemplo, azul)
        body.style.backgroundColor = 'blue';
    });
});
