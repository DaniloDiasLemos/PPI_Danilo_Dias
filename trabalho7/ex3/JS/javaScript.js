window.onload = () => {
    // seleciona todos os botões dentro de nav
    buttons = document.querySelectorAll("nav button");
    // para cada botão do query adiciona o evento click
    buttons.forEach(button => {
        // ao clickar no botão executa a função changeTab
        button.addEventListener("click", changeTab);
    });
    // coloca a classe 'tabActive' no primeiro 'section' de 'tabs' e a classe 'buttonAcive' no primeiro 'button' da 'nav'
    openTab(0);

    document.forms.formContato.onsubmit = validaForm;
}

function validaForm(e) {
    let form = e.target;
    let formValido = true;

    const spanNomeContato = form.nomeContato.nextElementSibling;
    const spanEmailContato = form.emailContato.nextElementSibling;
    const spanMensagemContato = form.mensagemContato.nextElementSibling;

    spanNomeContato.textContent = "";
    spanEmailContato.textContent = "";
    spanMensagemContato.textContent = "";

    if (form.nomeContato.value === "") {
        spanNomeContato.textContent = "O nome deve ser preenchido";
        formValido = false;
    }

    if (form.emailContato.value === "") {
        spanEmailContato.textContent = "O email deve ser preenchido";
        formValido = false;
    }

    if (form.mensagemContato.value === "") {
        spanMensagemContato.textContent = "A mensagem deve ser preenchido";
        formValido = false;
    }

    if (!formValido) {
        e.preventDefault();
    }
}

function changeTab(e) {
    // atribui o elemento alvo que vou acionado a variavel 'botaoAcionado'
    const botaoAcionado = e.target;
    // atribui o parente do botaoAcionado a variavel 'liDoBotao'
    const liDoBotao = botaoAcionado.parentNode;
    // faz um array com todos os filhos do pai do liDoBotao
    const nodes = Array.from(liDoBotao.parentNode.children);
    // atribui o index do liDoBotao a varivel 'index'
    const index = nodes.indexOf(liDoBotao);
    // executa a função passando o index
    openTab(index);
}

function openTab(i) {
    // seleciona o primeiro elemento com a classe 'tabActive'
    const tabActive = document.querySelector(".tabActive");
    // verifica se tabActive não está null
    if (tabActive !== null) {
        // se não estiver null atribui vazio a classe
        tabActive.className = "";
    }

    // seleciona o primeiro elemento com a classe 'tabActive'
    const buttonActive = document.querySelector(".buttonActive");
    if (buttonActive !== null) {
        buttonActive.className = "btn";
    }

    document.querySelectorAll(".tabs section")[i].className = "tabActive";
    document.querySelectorAll("nav button")[i].className = "btn btn-outline-primary buttonActive";
}