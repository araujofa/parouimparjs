function calcular(){
    var num1 = parseInt(document.querySelector('#num1').value);
    var num2 = parseInt(document.querySelector('#num2').value);
    var oper = document.querySelector('#oper').value;
    var res = document.querySelector('#res');
    var parImpar = document.querySelector('#par-impar');

    if(oper == '+'){
        var resultSoma = num1 + num2;
        var resultado = res.innerHTML = resultSoma;

        if(resultSoma % 2 == 0){
            parImpar.innerHTML = `O número ${resultado} é PAR`;
        }else {
            parImpar.innerHTML = `O número ${resultado} é ÍMPAR`;
        }
        
    }else if(oper == '-'){
        var resultSubt = num1 - num2;
        resultado = res.innerHTML = resultSubt;

        if(resultSubt % 2 == 0){
            parImpar.innerHTML = `O número ${resultado} é PAR`;
        }else {
            parImpar.innerHTML = `O número ${resultado} é ÍMPAR`;
        }

    }else if(oper == '*'){
        var resultVezes = num1 * num2;
        resultado = res.innerHTML = resultVezes;

        if(resultVezes % 2 == 0){
            parImpar.innerHTML = `O número ${resultado} é PAR`;
        }else {
            parImpar.innerHTML = `O número ${resultado} é ÍMPAR`;
        }

    }else if(oper == '/'){
        var resultDivisao = num1 / num2;
        resultado = res.innerHTML = resultDivisao;

        if(resultDivisao % 2 == 0){
            parImpar.innerHTML = `O número ${resultado} é PAR`;
        }else{
            parImpar.innerHTML = `O número ${resultado} é ÍMPAR`;
        }
        
    }else {
        alert('Você deve colocar um operador para continuar!')
    }
}