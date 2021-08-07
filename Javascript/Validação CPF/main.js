console.log('Inicializando Validação de CPF');



function validaCPF(cpf) {
    if (cpf.length != 11) {
        return false;
    } else {

        //validação do primeiro dígito
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        if (resultado != digitos.charAt(0)) {
            return false;
        }
      
        //

        //validação do segundo dígito
        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

       resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        if (resultado != digitos.charAt(1)) {
            return false;
        } 

        return true;
    }
}


function validacao() {
    var cpf = document.getElementById('cpf_digitado').value;

    document.getElementById('success').style.display = 'none' ;
    document.getElementById('error').style.display = 'none' ;

    var resultadovalidacao = validaCPF(cpf);

    if (resultadovalidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}


document.addEventListener('keydown', function(e){
    if (event.which == 13 || event.key == 13) {
      validacao();
    }
 }, false);
