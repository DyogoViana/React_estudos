// Capítulo 001 | Método Map | Exemplo 002

const livrosA =
[
	{titulo: "Construindo Slides com HTML", autor: "Mauricio Samy Silva"},
	{titulo: "Web Scraping com Python", autor: "Ryan Mitchell"},
	{titulo: "CSS", autor: "Maurício Samy Silva"},
];

let livrosTitulo = livrosA.map((livro) => "Livro: " + livro.titulo);
let livrosAutor = livrosA.map((livro) => "Autor: " + livro.autor);

console.log(livrosA);
console.log(livrosTitulo);
console.log(livrosAutor);
