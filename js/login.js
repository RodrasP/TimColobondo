"use strict"


import { cifrar } from "./cifrar.js";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('idForm').addEventListener("submit", function () {

        verify();

    })
});




function verify() {

    const nombre = document.getElementById('usuario').value;
    const password = cifrar(document.getElementById('password').value);

    const arrayData = JSON.parse(localStorage.getItem("arrayData"));


    for (let index = 0; index < arrayData.length; index++) {
        const element = arrayData[index];
        if (element.nombre === nombre && element.password === password) {
            document.getElementById("idForm").action = ('index.html');
            localStorage.setItem("datos", element.nombre);
        }
    }
}