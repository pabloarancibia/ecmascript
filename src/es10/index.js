//  ECMA Script 10

// Matris
let array = [1,2,3, [1,2,3, [1,2,3]]];

//Flat
console.log(array.flat(2))

// Flat map
let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value * 2]));

// trimStart()
let hello = '            hello world';
console.log(hello)
console.log(hello.trimStart())

// trimEnd()
let hello2 = 'hello world            ';
console.log(hello2)
console.log(hello2.trimEnd())

// se puede hacer try catch sin pasar valor error
try {
    
}catch{//acá no es necesario pasar error
    error // acá está disponible por defecto
}

// transformar de OBJETO a ARREGLO o de ARREGLO a OBJETO.
let entries = [["name","pablo"],["age","34"]];

console.log(Object.fromEntries(entries));

//Symbol() acceder a description de elemento
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);