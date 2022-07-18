const currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0;

document.querySelector("#adicionar").addEventListener('click', increment)
document.querySelector("#subtrair").addEventListener('click', decrement)

function increment() {

    if(currentNumber < 10){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
        if( currentNumber >= 0){
            currentNumberWrapper.style.color = "blue" 
        }
    }   
}
function decrement() {

    if( currentNumber > -10){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        if( currentNumber < 0){
            currentNumberWrapper.style.color = "red" 
        }
    }
}
