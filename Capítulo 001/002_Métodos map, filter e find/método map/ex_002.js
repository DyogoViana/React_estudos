// Capítulo 001 | Método Map | Exemplo 002

const livrosLista =
[
	{titulo: "Construindo Slides com HTML", autor: "Mauricio Samy Silva"},
	{titulo: "Web Scraping com Python", autor: "Ryan Mitchell"},
	{titulo: "CSS", autor: "Maurício Samy Silva"},
];

let livrosTitulo = livrosLista.map((livro) => "Livro: " + livro.titulo);
let livrosAutor = livrosLista.map((livro) => "Autor: " + livro.autor);

console.log(livrosLista);
console.log(livrosTitulo);
console.log(livrosAutor);
