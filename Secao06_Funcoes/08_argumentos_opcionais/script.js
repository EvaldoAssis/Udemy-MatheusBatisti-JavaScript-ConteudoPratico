function saudacao(nome, idade) {
    if (idade === undefined) {
        console.log("Seu nome é " + nome);
    } else {
        console.log(`Seu nome é ${nome} e você tem ${idade} anos.`);
    }
};

saudacao("Maycon Douglas", 20);
saudacao("Josefina");

function soma(a,b) {

    if(a === undefined || b === undefined) {
      console.log("Esta função precisa ter os dois argumentos");
    } else {
      return a + b;
    }
  
};

console.log(soma(2));
console.log(soma(2, 5));

