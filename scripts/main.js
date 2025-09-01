const myHeading = document.querySelector("h1");
const ronaldoBtn = document.querySelector("button");

myHeading.textContent = "Jogo Bonito";

ronaldoBtn.addEventListener("click", () =>{
    window.location.replace("../pages/cr7.html")
})