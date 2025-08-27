const palindromes = function (palavra) {
    let palavraInvertida = palavra.toLowerCase().match(/[a-z0-9]/gi).reverse().join(); 

    let palavraNormalizada = palavra.toLowerCase().match(/[a-z0-9]/gi).join();
    
    if(palavraNormalizada === palavraInvertida){
        return true;
    }else{
        return false;
    }
    
};

// Do not edit below this line
module.exports = palindromes;
