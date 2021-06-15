// Capítulo 001 do exemplo 001.

const livros001 = ["CSS", "JavaScript", "PHP"];
const livros002 = ["HTML", "React"];
const precos = [70, 30, 90, 100, 10];

let livros = [...livros001] + [...livros002];
let precoMaximo = Math.max(...precos)

console.log(livros);
console.log(precoMaximo);

