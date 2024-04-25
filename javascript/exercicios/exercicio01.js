/* Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a
sua media e a sua classificação conforme a tabela abaixo.

Media = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
 - Media menor 5, reprovado;
 - Media entre 5 e 7, recuperação;
 - Media acima de 7, aprovado;
*/

const primeiroSemestre = 8;
const segundoSemestre = 7;
const terceiroSemestre = 7;
const mediaTotal = (primeiroSemestre + segundoSemestre + terceiroSemestre) / 3;
console.log(mediaTotal);

if (mediaTotal < 5) {
  console.log('Reprovado!');
} else if ((mediaTotal) => 5 && mediaTotal <= 7) {
  console.log('Recuperação');
} else {
  console.log('Aprovado!');
}
