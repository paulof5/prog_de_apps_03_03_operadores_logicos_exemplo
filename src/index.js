/*
o if e o else são estruturas condicionais
neste caso, o if espera que uma condição seja
atendida para que parte do código seja executado.
caso não ocorra com sucesso a condição do fi
o bloco do else será acionado 
*/

let nota = 10;

if (nota >= 7 && nota <= 10) {
  console.log("passou de ano");
} else if (nota < 7 && nota >= 0) {
  console.log("aluno reprovado");
} else {
  console.log("nota inválida");
}
