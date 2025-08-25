const sumAll = function(a, b) {
    let soma = 0;
    
    if(a < 0 || b < 0 || Number.isInteger(a) == false || Number.isInteger(b) == false){
        return "ERROR";
    }else{
        if(a > b){
        for(let i = b; i <= a; i++){
        soma += i;
    }}else{
        for(let i = a; i <= b; i++){
        soma += i;
    }}
    }
    
    return soma;
};

// Do not edit below this line
module.exports = sumAll;
