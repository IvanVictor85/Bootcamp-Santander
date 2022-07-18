function comparaNumeros(num1, num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);
    /*return saoIguais ? "São iguais" : "Não são iguais"*/

    return `${primeiraFrase}  ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'não';
    }

    return `Os numeros ${num1} e ${num2} ${saoIguais} são iguais.`
    
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado10 = 'maior'
    } else if (soma === 10){resultado10 = 'igual'}

    if(compara20) {
        resultado20 = 'maior'
    } else if (soma === 20){resultado20 = 'igual'}

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log (comparaNumeros(0,0));