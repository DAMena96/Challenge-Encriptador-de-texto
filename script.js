// script.js

// Función para validar texto (sin mayúsculas ni caracteres especiales)
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

// Función para encriptar texto
function encriptarTexto(texto) {
    let textoEncriptado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar texto
function desencriptarTexto(texto) {
    let textoDesencriptado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Event Listeners para los botones
document.getElementById("encrypt-btn").addEventListener("click", function () {
    const inputText = document.getElementById("input-text").value;
    if (validarTexto(inputText)) {
        const encryptedText = encriptarTexto(inputText);
        document.getElementById("output-message").textContent = encryptedText;
    } else {
        document.getElementById("validation-message").textContent = "Texto no válido. Solo se permiten letras minúsculas y sin acentos.";
    }
});

document.getElementById("decrypt-btn").addEventListener("click", function () {
    const inputText = document.getElementById("input-text").value;
    if (validarTexto(inputText)) {
        const decryptedText = desencriptarTexto(inputText);
        document.getElementById("output-message").textContent = decryptedText;
    } else {
        document.getElementById("validation-message").textContent = "Texto no válido. Solo se permiten letras minúsculas y sin acentos.";
    }
});

// Funcionalidad de copiar al portapapeles
document.getElementById("copy-btn").addEventListener("click", function () {
    const outputText = document.getElementById("output-message").textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado al portapapeles");
    });
});
