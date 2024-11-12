// Contador de caracteres en el campo de texto
const textarea = document.getElementById("nota");
const charCount = document.getElementById("charCount");

textarea.addEventListener("input", () => {
    const currentLength = textarea.value.length;
    charCount.textContent = `${currentLength}/150 caracteres`;
});
