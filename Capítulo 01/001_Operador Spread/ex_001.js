// Capítulo 001 do exemplo 001.

const livros001 = ["CSS", "JavaScript", "PHP"];
const livros002 = ["HTML", "React"];
const precos = [70, 30, 90, 100, 10];


let livros = livros001 + livros002;
console.log("Livros " + livros);
console.log(typeof livros);

let livrosA = [livros001, livros002];
console.log("Livros A abaixo");
console.log(livrosA);

let livrosB = [...livros001, ...livros002];
console.log("Livros B abaixo");
console.log(livrosB);

let precoMaximo = Math.max(precos);
let precoMaximo001 = Math.max(...precos);
console.log("Preço Máximo " + precoMaximo);
console.log("Preço Máximo001 " +precoMaximo001);

