"use strict"

document.addEventListener("DOMContentLoaded", function () {


    const nombreLog = localStorage.getItem("datos");

    const nombre = document.getElementById("nombreLog");

    nombre.innerHTML='Hola, '+nombreLog;

});