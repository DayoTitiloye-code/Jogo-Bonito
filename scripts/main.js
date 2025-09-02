const myHeading = document.querySelector("h1");
const ronaldoBtn = document.querySelector("#cr7");
const messiBtn = document.querySelector("#messi");

myHeading.textContent = "Jogo Bonito";

ronaldoBtn.addEventListener("click", () =>{
    window.location.replace("../pages/cr7.html")
})

messiBtn.addEventListener("click", () =>{
    window.location.replace("../pages/messi.html")
})