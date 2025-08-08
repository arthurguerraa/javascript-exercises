const palavra = 'hey';
const vezes = 3;
const repeatString = function(palavra, vezes) {
    if(vezes < 0) return "ERROR";
    let resultado = '';
    for(let i = 0; i < vezes; i++){
        resultado += palavra;
    }
    return resultado;
};

// Do not edit below this line
module.exports = repeatString;
