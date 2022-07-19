const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Miguel',
		nota: 3,
		turma: '2C',
	},
    {
		nome: 'Ruan',
		nota: 2.9,
		turma: '2C',
	},
    {
		nome: 'Norberto',
		nota: 1,
		turma: '2C',
	}
];

function alunosAprovados(arr, media) {
    let aprovados = [];
    /* for com o object destructuring*/
    for(let i = 0; i < arr.length; i++){
        const {nota, nome} = arr[i];

        if(nota >= media){
            aprovados.push(`${nome} media ${nota}`);       
        }               
    /* for sem object destructuring*/
    /*for(let i = 0; i < arr.length; i++){
        if(arr[i].nota >= media){
            aprovados.push(arr[i].nome);
        }*/		
    } 
    return aprovados;
}
function alunosRecuperacao(arr, media, minima) {
    let recuperacao = [];
    /* for com o object destructuring*/
    for(let i = 0; i < arr.length; i++){
        const {nota, nome} = arr[i];

        if(nota >= minima && nota < media){
            recuperacao.push(`${nome} media ${nota}`);       
        }  
    } 
    return recuperacao;
}
function alunosReprovados(arr, media, minima) {
    let reprovados = [];
    /* for com o object destructuring*/
    for(let i = 0; i < arr.length; i++){
        const {nota, nome} = arr[i];

        if(nota < minima ){
            reprovados.push(`${nome} media ${nota}`);       
        }  
    } 
    return reprovados;
}
console.log(`Aprovados: ${alunosAprovados(alunos, 6, 3)}`);
console.log(`Em recuperação: ${alunosRecuperacao(alunos, 6, 3)}`);
console.log(`Reprovados: ${alunosReprovados(alunos, 6, 3)}`);
