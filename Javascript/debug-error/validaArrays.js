function validaArrays(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object')
            throw new TypeError("Array precisa ser um objeto");
    
        if(typeof num !== 'number')
            throw new TypeError("O parâmetro num precisa ser do tipo number");

        if(num < 0) throw new Error("Num não pode ser negativo");

        if(arr.length !== num) throw new RangeError("Tamanho inválido");        

        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(e.message)
        } else if(e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message)
        } else if(e instanceof Error) {
            console.log("Este erro é um Erro genérico");
            console.log(e.message)
        } else if(e instanceof RangeError) {
            console.log("Este erro é um RangeError!");
            console.log(e.message)        
        } else {
            console.log("Erro inesperado" + e);
        }     
    }
}

console.log(validaArrays([1,2,3],3))