// arrays

// const myArr = [0, 1,2,3,4,5,true, "Avadhut"] //element can be same type or different

const myArr = [0, 1,2,3,4,5]
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);

//Array Method
// myArr.push(9)
// myArr.pop(9)

// myArr.unshift(9)  // Not that much use bcz all value require to shift
// myArr.shift(9)  

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("c ", myArr)
console.log(myn2);
