// Capítulo 001 | Método Find | Exemplo 001

/*
	Sintaxe:
	https://developer.mozilla.org/pt-BR/docs/Web/Java Script/Reference/Global_Objects/Array/find


	arr.find(callback(element[, index[, array]])[, thisArg])][]

*/


const livrosLista =
	[
		{id: 1, titulo: "Construindo Sites com HTML"},
		{id: 2, titulo: "Web Scraping com Python"},
		{id: 3, titulo: "CSS3"}
	];

	let livros1 = livrosLista.find((livro) => livro.id === 3);

	console.log(livros1); // {id: 3, titulo: "CSS3"}
	console.log(livros1.titulo); // CSS3


