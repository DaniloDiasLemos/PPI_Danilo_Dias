window.onload = () => {
    // busca e seleciona o primeiro elemento com classe de nome modal
    const modal = document.querySelector(".modal");

    // busca e seleciona o primeiro elemento com classe de nome buttonClose
    const buttonClose = document.querySelector(".buttonClose");

    // adiciona um evento de click no elemento buttonClose
    buttonClose.addEventListener("click", () => {
        // atribui 'none' ao css style display fazendo com que o modal não apareça e não ocupe espaço
        modal.style.display = 'none';
    })

    // busca e seleciona o primeiro elemento com id de nome btnOpenModal
    const buttonOpenModal = document.getElementById("btnOpenModal");

    // adiciona um evendo click no elemento buttonOpenModal
    buttonOpenModal.addEventListener("click", () => {
        // atribui 'block' ao css style display fazendo com que o modal apareça e volte a ocupar espaço
        modal.style.display = "block";
    }); 
}