const texto1 = "Olá mundo";
const texto2 = 'Olá mundo';
const senha = "senhaSe123@";

//Unicode
const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);


const cidade = "belo horizonte";
const input = "Belo Horizonte";
const inputMinusculo = input.toLowerCase();

console.log(cidade === input); // false
console.log(cidade === inputMinusculo); // true

const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres
