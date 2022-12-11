"use strict"

document.addEventListener("DOMContentLoaded", function () {

    crear()

});

function crear() {
    const base = document.getElementById('juegoGlobos');

    for (let index = 0; index <= 20; index++) {

        const figure = document.createElement("figure");
        const globo = new Image();
        globo.src = "/assets/images/globo.png";
        globo.alt = "globo";
        figure.id="globo";
        figure.style.position="fixed";
        figure.style.top=Math.random()*(800-250)+250+"px";
        figure.style.left=Math.random()*(1500-0)+0+"px";


        globo.addEventListener("click", function () {
            globo.classList.add('move');
        });

        figure.appendChild(globo);
        base.append(figure);


    }



}

