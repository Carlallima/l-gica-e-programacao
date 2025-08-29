function somarDoisNumeros (valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado; 
}


function calcularMediaDeDoisNumeros (valor1,valor2) {
    // 1.Somar todos os valores
    const resultadoSomaDeDoisValores = somarDoisNumeros (valor1,valor2);

    //2. Média Dividir pela quantidade de numeros passados 
    const resultadoMediaDeDoisValores = resultadoSomaDeDoisValores /2 ;

    //3. Retornar o resultado
    return resultadoMediaDeDoisValores;
}

module.exports = {
    somarDoisNumeros
}