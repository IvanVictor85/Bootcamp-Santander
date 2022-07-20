const lista = [
    {
        name: 'sabao em po',
        preco: 28,
    },
    {
        name: 'sucrilhos',
        preco: 14,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

console.log(`Valor gasto ${saldoDisponivel - (lista.reduce((prev, current) => prev - current.preco, saldoDisponivel))}`);
console.log(`Saldo disponível: ${lista.reduce((prev, current) => prev - current.preco, saldoDisponivel)}`);

