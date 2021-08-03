// Capítulo 001 | Temaplate Literals | Exemplo 001

const titulo = `Livro React do "Maujor"`;
const preco = 80;
const mensagem = `O preço normal do ${titulo} é de R$${preco},00. Na promoção o preço cai para R$${preco * 0.8},00`;

console.log(mensagem);
// O preço normal do Livro React do "Maujor" é de R$80,00. Na promoção o preço cai para R$64,00
