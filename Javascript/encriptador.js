const textArea = document.querySelector(".texto");
const resultado = document.querySelector(".resultado");
const copia = document.querySelector(".copiar");

window.onload = function() {
    document.querySelector('.texto').focus();
}

/*
Llaves de encriptación
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`
 */

// Encriptar
function btnEncriptar(){
    const textoEncriptado = encriptarTexto(textArea.value)
    resultado.value = textoEncriptado
    textArea.value = "";
}

function encriptarTexto(texto) {
    // Convertir el texto a minúsculas
    texto = texto.toLowerCase();
    // Reemplazar letras por palabras
    texto = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    // Devolver el texto encriptado
    return texto;
}

// Desencriptar
function btnDesencriptar() {
    const textoDesencriptado = desencriptarTexto(textArea.value);
    resultado.value = textoDesencriptado
    textArea.value = "";
}
function desencriptarTexto(texto) {
    // Reemplazar palabras por letras
    texto = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    // Devolver el texto desencriptado
    return texto;
}

// Copiar
function copiar(){
    resultado.select();
    navigator.clipboard.writeText(resultado.value)
    resultado.value = "";
    alert("Texto Copiado")
    document.querySelector('.texto').focus();
}