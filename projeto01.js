// Introdução do Projeto Jornada do Herói
console.clear();
const prompt = require('prompt-sync')();

console.log('O jovem Miguel recebeu de seus pais a grande chance de conhecer o mundo encantado da Disney em suas férias. Mas para fazer essa viagem, Miguel deve cumprir 05 tarefas importantes. Caso ele não cumpra todas as tarefas, seu sonho de conhecer a Disney poderá ser frustado, mas nem por isso ele deixará de receber algum presente de consolação de seus pais!');
console.log();
console.log('E para sabermos se Miguel alcançou a chance de visitar a Walt Disney, responda SIM para cada tarefa realizada, e NAO para cada tarefa não cumprida por Miguel:');
console.log();

// Pergunta de nº 1, com o comando While logo abaixo (para que aceite a resposta somente como SIM ou NÃO). 
let pergunta1 = prompt('1- Miguel levou o carro do pai para a revisão? ').toLowerCase();
while (pergunta1 !== 'sim' && pergunta1 !== 'nao') {
    console.log('Resposta inválida!')
    pergunta1 = prompt('1- Miguel levou o carro do pai para a revisão? ').toLowerCase();
}
// Pergunta de nº 2, com o comando While logo abaixo (para que aceite a resposta somente como SIM ou NÃO). 
let pergunta2 = prompt('2- Miguel cortou a grama do jardim da casa? ').toLowerCase();
while (pergunta2 !== 'sim' && pergunta2 !== 'nao') {
    console.log('Resposta inválida!')
    pergunta2 = prompt('2- Miguel cortou a grama do jardim da casa? ').toLowerCase();
}
// Pergunta de nº 3, com o comando While logo abaixo (para que aceite a resposta somente como SIM ou NÃO). 
let pergunta3 = prompt('3- Miguel comprou a tinta para pintar seu quarto? ').toLowerCase();
while (pergunta3 !== 'sim' && pergunta3 !== 'nao') {
    console.log('Resposta inválida!')
    pergunta3 = prompt('3- Miguel comprou a tinta para pintar seu quarto? ').toLowerCase();
}
// Pergunta de nº 4, com o comando While logo abaixo (para que aceite a resposta somente como SIM ou NÃO). 
let pergunta4 = prompt('4- Miguel consertou o cano da pia da cozinha? ').toLowerCase();
while (pergunta4 !== 'sim' && pergunta4 !== 'nao') {
    console.log('Resposta inválida!')
    pergunta4 = prompt('4- Miguel consertou o cano da pia da cozinha? ').toLowerCase();
}
// Pergunta de nº 4, com o comando While logo abaixo (para que aceite a resposta somente como SIM ou NÃO). 
let pergunta5 = prompt('5- Miguel limpou o forro da garagem do pai? ').toLowerCase();
while (pergunta5 !== 'sim' && pergunta5 !=='nao') {
    console.log('Resposta inválida!')
    pergunta5 = prompt('5- Miguel limpou o forro da garagem do pai? ').toLowerCase();
}
console.log();

//  # PARTE DOS RESULTADOS COM CONDIÇÕES IF E ELSE IF #
// Variáveis que receberão o valor "1" das respostas que forem positivas
let soma1 = 0;
let soma2 = 0;
let soma3 = 0;
let soma4 = 0;
let soma5 = 0;

// Nessa condição atribui-se um valor "1" para cada resposta positiva nas variáveis das perguntas, e servirá para contagem da soma na variável "resultado". 
if (pergunta1 == 'sim') {
    soma1 = 1;
}
if (pergunta2 == 'sim') {
    soma2 = 1;
}
if (pergunta3 == 'sim') {
    soma3 = 1;
}
if (pergunta4 == 'sim') {
    soma4 = 1;
}
if (pergunta5 == 'sim') {
    soma5 = 1;
}

// essa variável soma o resultado de todas respostas positivas, conforme condição acima.
let resultado = (soma1 + soma2 + soma3 + soma4 + soma5);

// Condição If e Else IF que gerará os possíveis resultados em "console.log", de acordo com quantidade de respostas positivas na variável "resultados".
if (resultado == 0) {
    console.log('----- NENHUMA TAREFA CONCLUÍDA E, INFELIZMENTE, MIGUEL NÃO VAI À DISNEY EM SUAS FÉRIAS :( -----');
    console.log();
} else if (resultado == 1) {
    console.log('----- APENAS 01 TAREFA CONCLUÍDA!!! MIGUEL NÃO VAI À VIAGEM, MAS GANHA UM CELULAR DE ÚLTIMA GERAÇÃO  :| -----')
    console.log();
} else if (resultado == 2) {
    console.log('----- 02 TAREFAS CONCLUÍDAS!!! MIGUEL NÃO VAI À VIAGEM, MAS GANHA UM NOTEBOOK DE ÚLTIMA GERAÇÃO  :| -----')
    console.log();
} else if (resultado == 3) {
    console.log('----- 03 TAREFAS CONCLUÍDAS!!! MIGUEL QUASE ALCANÇA O SONHO DE IR À DISNEY, MAS GANHA APENAS UMA VIAGEM PARA CONHECER FERNANDO DE NORONHA  :| -----')
    console.log();
} else if (resultado == 4) {
    console.log('----- 04 TAREFAS CONCLUÍDAS!!! MIGUEL IRÁ CONHECER A DISNEY!!! MAS SERÁ UMA VIAGEM APENAS DE 10 DIAS  :| -----')
    console.log();
} else if (resultado == 5) {
    console.log('------------------------------------     PARABÉNS!!!     ------------------------------------')
    console.log('-------- 05 TAREFAS CONCLUÍDAS!!! MIGUEL IRÁ CONHECER A DISNEY EM SUAS FÉRIAS NO MÊS TODO DE JULHO!!!  :) --------')
    console.log();
}