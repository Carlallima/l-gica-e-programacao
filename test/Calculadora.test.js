const {somarDoisNumeros} = require('../src/calculadora');
const { expect } = require ('chai');

describe('Testes da Função de Soma', function (){

   it('A função deve ser capaz de somar dois numeros positivos', function(){
       // Coleta o resultado da função
       const resultadoDaSoma = somarDoisNumeros (5, 3);

       // compara o resultado com valor que voce espera
       expect (resultadoDaSoma).to.equal (8);
   });

   it('A função deve ser capaz de somar um numero positivo e um  negativo', function(){
    // Coleta o resultado da função
       const resultadoDaSoma = somarDoisNumeros (50, -15);

       // compara o resultado com valor que voce espera
       expect (resultadoDaSoma).to.equal (35);

   });

    it('A função deve ser capaz de somar dois numeros negativos', function(){
    // Coleta o resultado da função
       const resultadoDaSoma = somarDoisNumeros (-15, -20);

       // compara o resultado com valor que voce espera
       expect (resultadoDaSoma).to.equal (-35);

});
 it('A função deve ser capaz de somar dois numeros zerados', function(){
    // Coleta o resultado da função
       const resultadoDaSoma = somarDoisNumeros (0,+0);

       // compara o resultado com valor que voce espera
       expect (resultadoDaSoma).to.equal (0);
 })

})