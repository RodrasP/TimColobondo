"use strict"

const ABECEDARIO = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z');


export function cifrar(textValue) {

    const desplazamiento = 5

    let resultado = '';
    for (let i = 0; i < textValue.length; i++) {

        let indexNumber = ABECEDARIO.indexOf(textValue.charAt(i).toLowerCase());
        if (indexNumber === -1) {
            resultado = resultado + textValue.charAt(i);
            continue;
        }
        resultado = resultado + ABECEDARIO[(indexNumber + desplazamiento) % 26];
    }
    return resultado;
}
