// funcion de como se hacia antes de es6
function newFunction(name, age, country){
    var name = name || 'pablo';
    var age = age || '32';
    var country = country || 'Arg';

    console.log(name, age, country);

};
//es6
function newFunction2(name='oscar',age='32',country='Arg'){
    console.log(name,age,country);
};

newFunction2();
newFunction2('Paolo','25','CO');

// instalamos Runcode Ctrl+P y ext install formulahendry.code-runner
// seleccionamos el codigo que queremos ejecutar, clic dcho y run code

//
let hello = 'hello';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// con template literal
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//es6 (salto de linea)
let lorem = `dfdsg gadg gasdga g rg gddga 
gregdfgfsdgdsfgsdfgg
fdagdfgs`;

console.log(lorem);

//
let person = {
    'name':'oscar',
    'age': 32,
    'country':'MX'
}

// antes
console.log(person.names, person.age)

//es6
let { names,age,country } = person;
console.log(names, age,country);

// es6 unir elementos con ...
let team1 = ['oscar','julian','ricardo'];
let team2 = ['vale', 'jess', 'cami'];

let education = ['David', ...team1, ...team2];

console.log(education);

// var es global
// let esta disponible en el scope

{
    var globalVar = "Global var";
}
{
    let globalLet = "global let";
    console.log(globalLet);
}
console.log(globalVar);
//console.log(globalLet);
// globalLet is not defined

//const en es6

const a = 'b';
//a = 'a';
//console.log(a)//TypeError: Assignment to constant variable.

///////////////////////////CLASE 4/////////////////////////////////////////
// declaracion y asignacion de objeto

let name3 = 'pablo';
let age3 = '34';
//es5.
obj = {name3:name3, age3:age3}
//es6
obj3={name3,age3}
console.log(obj3);

//arrow functions

const names4 = [
    {name4:'pablo',age4:21},
    {name4:'zule',age4:23},
]

let listOfNames = names4.map(function(item){
    console.log(item.name4);
})
//es6 reemplazamos la funcion anonima por "=>"
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name4, age4) => {
    //...
};

const listOfNames4 = name4 => {
    //...
};

const square = num => num * num;

//
// Promises
//
// creamos la promesa, debe tener resolve y reject, 
//resolve para cuando se cumple 
//reject cuando no
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('positive res');
        }else{
            reject('Ups!');
        }
    });
}

//llamamos a la promesa, 
// con then esperamos el resultado y lo imprimimos
// si hay error lo capturamos con catch
helloPromise()
.then(response => console.log(response))
.then(()=> console.log('hola'))//podemos anidar los then
.catch(error => console.log(error));

////////////////////////////// CLASE 5  ////////////////////
// POO

class calculator {
    // constructor
    constructor(){
        //atributos
        this.valueA = 0;
        this.valueB = 0;
    }
    //metodos
    sum (valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

// módulos. module.js

import {hello} from './module';

hello();

//GENERATORS
// funcion que retorna valores segun attr definido

function* helloWorld(){
    if(true){
        yield 'hello, ';

    }
    if (true){
        yield 'World';
    }
};

const generatorsHello = helloWorld();
console.log(generatorsHello.next().value);
console.log(generatorsHello.next().value);
console.log(generatorsHello.next().value);
// devuelve:
//hello
//World
//undefined



