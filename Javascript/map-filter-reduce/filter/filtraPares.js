const array = [-4, 1, 5, 8, 10, 13, 16];
console.log('Números pares', array.filter((pares) => pares % 2 === 0)); /* exemplo simplificado com arrow function*/

function filtraImpares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 !== 0;
}

console.log('Números ímpares', filtraImpares(array));