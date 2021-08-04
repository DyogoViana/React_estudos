// Capítulo 001 | Método Map | Exemplo 001


const livros = ["CSS", "HTML", "JavaScript", "React", "PHP"];
	let livros001 = livros.map((livro) => "Livro " + livro + ".");
	let livros002 =  livros.map((livro, index) => "Livro " + index + " " + livro + ".");

console.log(livros);
console.log(livros001);
console.log(livros002);