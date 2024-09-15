// Solicitar ao usuário o número para calcular a tabuada
let number = prompt("Informe um número para calcular a tabuada (de 1 a 20):");
number = parseInt(number);

if (isNaN(number)) {
    console.log("Por favor, insira um número válido.");
} else {
    let resultString = ""; // Variável para armazenar os resultados

    // Loop para calcular a multiplicação de 1 a 20
    for (let i = 1; i <= 20; i++) {
        resultString += `${number} x ${i} = ${number * i}\n`;
    }

    // Exibir a tabuada completa
    console.log("Resultado da tabuada:");
    console.log(resultString);
}