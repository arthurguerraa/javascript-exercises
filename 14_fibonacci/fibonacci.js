const fibonacci = function(a) {
    if(a < 0){
        return "OOPS";
    }else if(a == 0){
        return 0;
    }else if(a == 1 || a == 2){
        return 1;
    }else{
        let primeiro = 1;
        let segundo = 1;
        let soma;
        for(let i = 3; i <= a; i++){
            soma = primeiro + segundo
            primeiro = segundo;
            segundo = soma;
        }
        return soma;
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
