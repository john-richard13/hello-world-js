// Exibindo uma mensagem de boas-vindas ao usuário
alert('Seja bem vindo ao nosso site!');
// Necessidade de preencher todos os campos
alert('Por favor, preencha todos os campos obrigatórios.');

// Solicita que o nome do usuario seja inserido
let ide = prompt('Por favor, insira seu nome:');
console.log('Nome inserido:', ide);

// Saudação personalizada usando o nome inserido
alert(`Olá, ${ide}! Seja bem vindo ao nosso site.`);
//Mensagem de erro para campos obrigatórios
let mensagemDeErro = ('Erro! Preencha todos os campos obrigatórios.');
// Agora exiba um alerta com o valor da variável
alert(mensagemDeErro);

// Solicita que o usuário indique sua idade
let age = prompt('Qual é sua idade?');
console.log('Idade inserida:', age);
// Condicional para verificar se o usuário é maior de idade
if (age >= 18) {
    alert('Você pode tirar a habilitação de motorista.');
} else {
    alert('Você ainda não pode tirar a habilitação de motorista.');
}

// Guardando o número secreto em uma variável
let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;
console.log('Número secreto:', numeroSecreto);
// Solicita que o usuário insira um palpite para o número secreto
let chute = prompt('Tente adivinhar o número secreto (entre 1 e 100):');
// Condicional para verificar se o palpite está correto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' //Este comando significa que: se tentativas for maior que 1, a variável palavraTentativa recebe 'tentativas'.
Caso contrário, recebe 'tentativa'.”
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
alert(`Parabéns! Você acertou o número secreto ${numeroSecreto}!`);
