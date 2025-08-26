const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(a) {
  let soma = 0;
    for(let i = 0; i < a.length; i++){
    soma = soma + a[i];
  }
  return soma;
};

const multiply = function(a) {
  let multiplicacao = 1;
  for(let i = 0; i < a.length; i++){
    multiplicacao = multiplicacao * a[i];
  }
  return multiplicacao;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  let temp = 1;
  if(a == 0){
    return temp;
  }else{
    for(let i = a; i >= 2; i--){
    temp = temp * i;
  }}
	return temp;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
