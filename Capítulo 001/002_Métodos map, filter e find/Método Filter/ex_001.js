// Capítulo 001 | Método Filter | Exemplo 001

/*
	Sintaxe:
	https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


	let newArray = arr.filter(callback[, thisArg])
*/


const livros =
[
	{titulo: "Construindo Slides com HTML", autor: "Maurício Samy Silva"},
	{titulo: "Web Scraping com Python", autor: "Ryan Mitchell"},
	{titulo: "CSS", autor: "Maurício Samy Silva"},
];

let livros1 = livros.filter((livro) => livro.titulo === "CSS");
let livros2 = livros.filter((livro) => livro.autor === "Maurício Samy Silva");
let livros3 = livros.filter((livro) => livro.titulo.includes("com"));

console.log(livros1);
console.log(livros2);
console.log(livros3);
