
//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let idade = 18;
if(idade >= 18){
console.log('você esta liberado');
}else{
    console.log('Proibido sua entrada');
}


//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

let maiorIdade = 18;
let serRacional = 'Humano';
if((maiorIdade >= 18) && (serRacional === 'Humano')){
    console.log('sua maior idade permite sua entrada, perdoe mas seu pet não podera entrar!');
}else{
    console.log('você não atende ao pré-requisito');
}



//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
 let mesAniversario = 'Dezembro';
 if((mesAniversario == 'Janeiro') || (mesAniversario == 'Dezembro')){
    console.log('você é Capricórnio');
}else{
    console.log('você não é Capricórnio');}



    //4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let nome = 'Felipe';
if(nome.substring(0, 1) == 'R') {
    console.log("Seu nome começa com R");
} 
else {
    console.log("Seu nome não começa com R");
} 



//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let sobreNome = 'Silva';
if (sobreNome.length >= 6 || sobreNome.substring(0,1) === 'E'){
    console.log("Seu sobrenome têm mais de 6 letras ou começa com E");
}
else {
    console.log("Seu sobrenome NÃO têm mais de 6 letras e NÃO começa com E");
} 
