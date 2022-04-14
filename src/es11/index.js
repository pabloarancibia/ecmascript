// ECMAScript 11

//  DINAMIC IMPORT
// cuando hace clic carga el archivo file
// en ese momento recién se carga la pieza de código
// esto mejora la performance de la app

const button = document.getElementById("btn");

button.addEventListener("click", async function (){
    const module = await import("./file.js");
    module.hello();
});

// BIG Int
// * ver la n al final del int
const aBigNumber = 9007199254740991n
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// Promise All Settled

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1,promise2,promise3])
.then(res => 
    console.log(res)
);

// a diferencia de all, allSetled resuelve todas las promesas sin 
// importar si alguna falla.

// 🌎 Global This
console.log(window);
console.log(globalThis);

// null operator - operador lógico.
const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)

// es un operador lógico que devuelve su operando del lado derecho cuando su operando del lado izquierdo es null o undefined, de lo contrario devuelve su operando del lado izquierdo.
false ?? 'foo' // false
undefined ?? 'foo' // 'foo'
null ?? 'foo' // 'foo'
NaN ?? 'foo' // NaN


// OPTIONAL  CHAINING

const user = {};

console.log(user?.profile?.email);

if(user?.profile?.email){
    // tenemos email
}else{
    // no tenemos email
}

