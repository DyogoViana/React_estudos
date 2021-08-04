import estudar from "./utils.js";
import { elogiar } from "./utils.js";


// Botão 001
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
	estudar("Vamos estudar React.");
});


// Botão 002
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
	elogiar("O livro React do Maujor é muito bom!");
});


