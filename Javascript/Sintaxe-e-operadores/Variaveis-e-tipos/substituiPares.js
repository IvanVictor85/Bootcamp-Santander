function substituiPares(array) {
    if (!this) return -1;
    if (!array.length) return -1; 

    for(let i = 0; i < array.length; i++) {
        if(array[this] === 0){
            console.log("Você já é zero!!")
        } else if(array[i] % 2 === 0) {
            console.log(`substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90]
substituiPares(arr);
console.log(arr);