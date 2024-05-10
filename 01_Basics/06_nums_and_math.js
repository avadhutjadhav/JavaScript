const score = 100
// console.log(score);

const balance = new Number(200)
// console.log(balance); //[Number: 200] type number 

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.46453

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++ MAths +++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-8));
// console.log(Math.round(-8.99));
// console.log(Math.ceil(4.28));
// console.log(Math.floor(4.28));
// console.log(Math.min(4.28,2,3,4));
// console.log(Math.max(4.28,4,2,7));
// console.log(Math.floor(Math.random()*10) +1);

//find value bet min and max value
const min = 10
const max = 10

console.log( Math.floor(Math.random() * (max - min +1)) +min);