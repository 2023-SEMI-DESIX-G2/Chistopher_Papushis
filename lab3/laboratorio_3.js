
console.log(`Punto 2`);
let palabra = "automovil";
const cantidadDeCaracteres = car =>{
    let arr = [];
    let arr2 = [];
    arr = palabra.split("");
    for(let i=0;i<arr.length;i++){
        let cont=0;
        arr.includes(arr[i]);
        cont++;
    }
    console.log(arr2);
}

cantidadDeCaracteres(palabra);
console.log(`Punto 3`);

function esBisiesto(year){
    let isB=false, msn;
    if ((year % 400 === 0) || (year % 4 === 0)) {
        isB = true;
    } else if  (year % 100 === 0){
        isB = false;
    }

    if(isB){
         msn = `Si es bisiesto`;
    }else{
         msn = `No lo es.`;
    }

    return msn;
}

console.log(esBisiesto(2020));

console.log(`Punto 4`);
function esPrimo(num){
    if(num === 0 || num === 1 || num===4) return false;
    for (let i = 2; i < num/2; i++) {
        if(num % i === 0){
            return false;
        }
    }
    // console.log(num);
    return true;
}

function contar(n){
    let acum = 0;
    for (let j = 1; j <= n; j++){
        // console.log(j);
        let isP = esPrimo(j);
        if(isP) acum += j;
    }
    return acum;
}

console.log(contar(7));