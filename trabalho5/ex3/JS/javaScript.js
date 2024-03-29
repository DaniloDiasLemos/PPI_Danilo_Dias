document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector("button");
    const div = document.querySelector("div");
    const input = document.querySelector("input");
    button.addEventListener("click", () => {
        div.style.visibility = 'visible';
        showMessage(input.value);
    })
    const okButton = document.querySelector("#okButton");
    okButton.addEventListener("click", () => {
        div.style.visibility = 'hidden';
    })
})

function showMessage(msg) {
    const p = document.querySelector("p");
    p.textContent = msg;
}