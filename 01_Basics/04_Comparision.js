// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);

//console.log("2" > 1);  //true (JS covert "2" to number)

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

//Avoid above comparision use ===

console.log("2" ===2);