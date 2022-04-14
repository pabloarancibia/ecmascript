//ECMA Script 8
// object entries

const data = {
    frontend: 'oscar',
    backend:'isabel',
    design:'ana',
}



const entries = Object.entries(data);
console.log(entries);

//  [
//     [ 'frontend', 'oscar' ],
//     [ 'backend', 'isabel' ],
//     [ 'design', 'ana' ]
//   ]

// cantidad elementos

console.log(entries.length);

// object values, valor de objetos a un arreglo

const data2 = {
    frontend: 'oscar',
    backend:'isabel',
    design:'ana',
}

const values = Object.values(data2);
console.log(values);
// [ 'oscar', 'isabel', 'ana' ]

const string = 'hello';
console.log(string.padStart(7,'hi'))
// hiHello
console.log(string.padEnd(12,'------'))
// hello-------

///////////////////// CLASE 8 //////////////////////

// Promesa. Funcion que demora 3 seg.
// probar con true y con false

const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (true) 
        ? setTimeout(()=>resolve('Hello World'), 3000)
        : reject(new Error('Test error'))
    })
};

// Async Await
// funcion asincrona que espera a que la promesa 
// a la que llamamos devuelva el result
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

//
const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error) {
        console.log(error);
    }

}

anotherFunction();