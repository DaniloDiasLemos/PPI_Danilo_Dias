document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector("h1");
    h1.addEventListener("click", () => {
        h1.textContent = "Rodrigo Maria de Nazaré"
    })
    const h2 = document.querySelectorAll("h2");
    h2.forEach(element => {
        element.addEventListener("click", () => {
            element.textContent = "Obrigado";
        })
    });
})