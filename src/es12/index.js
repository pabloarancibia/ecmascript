const string = "JS es maravilloso, con JS puedo crear el futuro";

const replacedString = string.replace("JS", "Python");
console.log(replacedString)
//Python es maravilloso, con JS puedo crear el futuro

const replacedString2 = string.replaceAll("JS", "Python");
//Python es maravilloso, con Python puedo crear el futuro

// 🔒 Metodos privados con #
class Message {
    #show(val){
        console.log(val);
    };
    // get #add(val){
    //     //...
    // }
}

const message = new Message();
message.show('hola');

// Promise Any

const promise4 = new Promise((resolve, reject) => reject("1"));
const promise5 = new Promise((resolve, reject) => resolve("2"));
const promise6 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise5,promise6,promise4])
    .then(response => console.log(response));
    // retorna 2 


// 🦴 WeakRef(element);
// referencia debil a un objeto

class anyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }

}

// 🧪 Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ||= isFalse2);

let isTrue3 = undefined;
let isFalse3 = false;
console.log(isTrue3 ??= isFalse3);
