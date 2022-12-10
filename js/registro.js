"use strict"

import {cifrar } from "./cifrar.js";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('idForm').addEventListener("submit", function () {


        const nombre = document.getElementById('nombre').value;
        const pass = document.getElementById('password').value;

        storeData(nombre, cifrar(pass));

    })
});



function getArrayData() {
    let arrayData = localStorage.getItem("arrayData");
    if (arrayData === null) {
        return arrayData = [];
    }
    return arrayData = JSON.parse(arrayData);
}

function storeData(nombre, password) {
    let arrayData = getArrayData();
    arrayData.push({
        nombre: nombre,
        password: password,

    });
    localStorage.setItem("arrayData", JSON.stringify(arrayData));
}