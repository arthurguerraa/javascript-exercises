const reverseString = function (palavra) {
    let vet = palavra.split("");
    let inicio = 0;
    let fim = vet.length - 1;

    while(inicio < fim){
        let temp = vet[inicio];
        vet[inicio] = vet[fim];
        vet[fim] = temp;
        inicio++;
        fim--;
    }

    let palavraInvertida = vet.join("");
    return palavraInvertida;
};

// Do not edit below this line
module.exports = reverseString;
