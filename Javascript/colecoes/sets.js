const meuArray = [30, 30, 'a',  5, 30.8, -16, [5,8,10],'b', 'a', [5,8,10], 30.8, Math.PI, Math.PI];


function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet]; /*exemplo com novo array*/

    //return mySet; /*exemplo com set*/
}

console.log(valoresUnicos(meuArray));