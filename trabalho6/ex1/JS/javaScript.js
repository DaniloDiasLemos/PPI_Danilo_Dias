document.addEventListener('DOMContentLoaded', () => {
    const subTitulos = document.querySelectorAll("h2");
    subTitulos.forEach(subTitulo => {
        subTitulo.addEventListener('click', () => {
            sibling = subTitulo.nextElementSibling;
            sibling.style.display = "none";
        })
        subTitulo.addEventListener('dblclick', () => {
            sibling = subTitulo.nextElementSibling;
            sibling.style.display = "block";
        })
    });
})