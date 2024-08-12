// 1) Crie uma variável que irá receber como valor um array de 4 notas.
let notas = [7.5, 8.0, 6.5, 9.0];

// Função para calcular a média das notas
function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

// Chamando a função e exibindo o resultado
let media = calcularMedia(notas);
console.log("A média das notas é: " + media);

// Função para verificar a média e exibir a mensagem apropriada
function verificarMedia(media) {
    if (media > 7) {
        document.write("Parabéns você passou na média!");
    } else {
        document.write("Infelizmente você está de recuperação.");
    }
}

// Chamando a função com a média calculada
verificarMedia(media);

// Função para imprimir os nomes dos alunos
function imprimirNomes(alunos) {
    alunos.forEach(function(nome) {
        document.write(nome + "<br>");
    });
}

// Exemplo de uso
let nomesAlunos = ["Ana", "João", "Maria", "Carlos"];
imprimirNomes(nomesAlunos);

// Função para coletar e confirmar os dados do aluno
function coletarDadosAluno() {
    // a) Faça as seguintes 5 perguntas ao usuário:
    let nome = prompt("Qual o nome do aluno?");
    let idade = prompt("Qual a idade do aluno?");
    let serie = prompt("Qual a série do aluno?");
    let escola = prompt("Qual o nome da escola?");
    let materiaFavorita = prompt("Qual a sua matéria favorita?");

    // b) Confirmar os dados inseridos
    let confirmacao = confirm(
        `Confirma os dados inseridos?\n\n` +
        `Nome: ${nome}\n` +
        `Idade: ${idade}\n` +
        `Série: ${serie}\n` +
        `Escola: ${escola}\n` +
        `Matéria Favorita: ${materiaFavorita}`
    );

    // c) Exibir as informações ou d) mostrar mensagem de não confirmação
    if (confirmacao) {
        document.write(`<h2>Informações do Aluno</h2>`);
        document.write(`Nome: ${nome}<br>`);
        document.write(`Idade: ${idade}<br>`);
        document.write(`Série: ${serie}<br>`);
        document.write(`Escola: ${escola}<br>`);
        document.write(`Matéria Favorita: ${materiaFavorita}<br>`);
    } else {
        document.write("Os dados não foram confirmados.");
    }
}

// Chamando a função para coletar os dados do aluno
coletarDadosAluno();

// Função para calcular a média das notas
function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

// Função principal para capturar os dados e calcular a média
function sistemaDeNotas() {
    // Capturando o nome da matéria
    let nomeMateria = prompt("Digite o nome da matéria:");

    // Capturando as 4 notas
    let notas = [];
    let i = 0;
    while (i < 4) {
        let nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
        if (!isNaN(nota)) {
            notas.push(nota);
            i++;
        } else {
            alert("Por favor, digite um número válido.");
        }
    }

    // Criando o objeto com o nome da matéria e as notas
    let materia = {
        nomeMateria: nomeMateria,
        notas: notas
    };

    // Calculando a média das notas
    let media = calcularMedia(materia.notas);

    // Exibindo o resultado
    document.write(`<h2>Informações da Matéria</h2>`);
    document.write(`Nome da Matéria: ${materia.nomeMateria}<br>`);
    document.write(`Notas: ${materia.notas.join(", ")}<br>`);
    document.write(`Média: ${media.toFixed(2)}<br>`);
}

// Chamando a função principal
sistemaDeNotas();

// Função para encontrar o maior número em um array
function encontrarMaiorNumero(numeros) {
    let maior = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    return maior;
}

// Exemplo de uso
let numeros = [3, 7, 2, 9, 5];
let maiorNumero = encontrarMaiorNumero(numeros);
console.log("O maior número é: " + maiorNumero);

