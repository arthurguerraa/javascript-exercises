const findTheOldest = function(array) {
   const anoAtual = new Date().getFullYear();

  return array.reduce((maisVelha, pessoa) => {
    const idadeMaisVelha = (maisVelha.yearOfDeath || anoAtual) - maisVelha.yearOfBirth;
    const idadeAtual = (pessoa.yearOfDeath || anoAtual) - pessoa.yearOfBirth;

    return idadeAtual > idadeMaisVelha ? pessoa : maisVelha;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
