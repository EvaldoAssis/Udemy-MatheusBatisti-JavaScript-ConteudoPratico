/*

    Soma de Números Pares

    Escreva uma função chamada sumEvenNumbers que recebe um array de números como argumento.
    A função deve calcular e retornar a soma de todos os números pares presentes no array.
    Utilize o operador de módulo (%) para determinar se um número é par.
    Considere que o array pode conter tanto números inteiros positivos quanto negativos.
    Dica: Para verificar se um número é par, você pode usar a expressão numero % 2 === 0, onde % é o operador de módulo que retorna o resto da divisão.

*/

function sumEvenNumbers(numbers = []) {

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
        
    }

    return sum;
    
}

console.log(sumEvenNumbers([2, 3, 4, 5, 6]));