alert('Boas vindas ao jogo do número secreto');
numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo);
console.log('numeroSecreto');
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    let chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}: `);

    if (chute == numeroSecreto) {
        break;
    } 
    else {
        if (chute > numeroSecreto){
            alert(`O número é menor que ${chute}`);
        }   
        else if (chute < numeroSecreto){
            alert(`O número é maior que ${chute}`);
        }
    tentativas ++;
    }
}
let palavraTetantivas = tentativas > 1? 'Tentativas' : 'Tentativa';
    alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto})\n${palavraTetantivas} ${tentativas}`);
