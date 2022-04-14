// ECMA Script 9 - Jun 2018
// CLASE 9

const obj = {
    name:'oscar',
    age:32,
    country: 'AR'
};

// operador de reposo
// ...all (todo lo demás)

let {country, ...all}= obj;
console.log(all);
// imprime todo menos country

//
const obj0 = {
    name: 'Oscar',
    age: 32
}

const obj1 = {
    ...obj0, //ACA concatena todo obj0
    country: 'AR'
}

console.log(obj1);

// Promise finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=>resolve('hello world'),3000) 
            : reject(new Error('Test error'))
    });
}

helloWorld()
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    .finally(()=> console.log('finalizó'))

// hello world
// finalizó

// MATCH

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year,month,day)
// 2018 04 20