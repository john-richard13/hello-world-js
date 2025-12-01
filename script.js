// Exibindo uma mensagem de boas-vindas ao usuário
alert('Seja bem vindo ao nosso site!');
// Necessidade de preencher todos os campos
alert('Por favor, preencha todos os campos obrigatórios.');
// Declarar uma variável para armazenar o nome do usuário
let nome = 'Lua';
// Solicita que o nome do usuario seja inserido
let ide = prompt('Por favor, insira seu nome:');
// Saudação personalizada usando o nome inserido
alert('Olá, ' + ide + '! Seja bem vindo ao nosso site!');
//Mensagem de erro para campos obrigatórios
let mensagemDeErro = ('Erro! Preencha todos os campos obrigatórios.');
// Agora exiba um alerta com o valor da variável
alert(mensagemDeErro);

// Idade do usuário
let idade = 25;
// Solicita que o usuário indique sua idade
let age = prompt('Qual é sua idade?');
// Condicional para verificar se o usuário é maior de idade
if (age >= 18) {
    alert('Você pode tirar a habilitação de motorista.');
} else {
    alert('Você ainda não pode tirar a habilitação de motorista.');
}

// Guardando o número secreto em uma variável
let numeroSecreto = 42;
// Solicita que o usuário insira um palpite para o número secreto
let chute = prompt('Tente adivinhar o número secreto (entre 1 e 100):');
// Condicional para verificar se o palpite está correto
if (numeroSecreto == chute) {
    alert('Parabéns! Você acertou o número secreto (42)!');
} else {alert('Infelizmente, você errou. Tente novamente!');}


// Variável de vendas
let vendas = prompt('Insira o valor das vendas que deseja realizar:');
// Variável de saldo disponível
let saldoDisponivel = 1000;
// Condicional para verificar se as vendas são compátiveis com o saldo disponível
if (vendas <= saldoDisponivel) {
    alert('Venda realizada com sucesso!');
} else {
    alert('Saldo insuficiente para realizar a venda.');
}
