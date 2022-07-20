const array = [2, 1.8, 5, -10, 0, 1+2];

console.log(array.map((item) => item * 2)); //com arrow function

function mapSemThis(arr) {
    return arr.map(function(item){
        return item * 2;       
    })
}

console.log(mapSemThis(array));
console.log(array);


