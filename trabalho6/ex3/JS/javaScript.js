window.onload = () => {

    // busca e seleciona o primeiro elemento com id 'interesse'
    const campoInteresse = document.querySelector("#interesse")

    // adiciona um evento de soltar tecla no elemento campoInteresse
    campoInteresse.addEventListener("keyup", e => {
        // se a tecla solta for o 'Enter' entra no if
        if (e.key === "Enter") {
            // executa a função adicionaInteresse
            adicionaInteresse();
        }
    });

    function adicionaInteresse() {
        
        // busca e seleciona o primeiro elemento com id 'interesse'
        const campoInteresse = document.querySelector("#interesse");

        // busca e seleciona o primeiro elemento ol
        const listaInteresse = document.querySelector("ol");


        // cria um novo elemento li
        const novoLi = document.createElement("li");

        // cria um novo elemento span
        const novoSpan = document.createElement("span");

        // cria um novo elemento button
        const novoButton = document.createElement("button");

        // atribui o valor do input ao textContent do novoSpan
        novoSpan.textContent = campoInteresse.value;

        // atribui o caractere especial X ao textContent do novoButton
        novoButton.textContent = '❌'

        // adiciona como filho no ultimo da arvore DOM o novoSpan para o pai novoLi
        novoLi.appendChild(novoSpan);

        // adiciona como filho no ultimo da arvore DOM o novoButton para o pai novoLi
        novoLi.appendChild(novoButton);

        // adiciona como filho no ultimo da arvore DOM o novoLi para o pai listaInteresse
        listaInteresse.appendChild(novoLi);

        // adiciona um evento de click no elemento novoButton
        novoButton.addEventListener("click", () => {
            // remove da arvore DOM o filho novoLi do pai listaInteresse
            listaInteresse.removeChild(novoLi);
        });

        // reseta o valor do campoInteresse
        campoInteresse.value = '';


    }
}