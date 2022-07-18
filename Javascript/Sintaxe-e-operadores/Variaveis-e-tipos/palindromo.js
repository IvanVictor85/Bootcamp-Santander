
//solução google
function verificaPalindromo(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;

}

/*console.log(verificaPalindromo(""));*/

//solução 2
// omo
function verificaPalindromo2(string) {
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length -1 - i]) {
            console.log(`a string ${string} é diferente de ${string.split("").reverse().join("")}`)
            return false;
        }
    }
    console.log(`a string ${string} é igual a ${string.split("").reverse().join("")}`)
    return true;
}

console.log(verificaPalindromo2("omo"));
