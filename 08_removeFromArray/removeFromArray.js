const removeFromArray = function(vetor, valorARemover, valorARemover2, a, b) {

    const vetorFiltrado = vetor.filter(temp => temp !== valorARemover && temp !== valorARemover2);
    const vetorSemMultiplos = vetorFiltrado.filter(temp => temp !== valorARemover % 2 == 0);
    const vetorSemNada = vetor.filter(temp => temp !== valorARemover && temp !== valorARemover2 && temp !== a && temp !== b);
    return vetorSemNada;
    return vetorFiltrado;
    return vetorSemMultiplos;
};

// Do not edit below this line
module.exports = removeFromArray;
