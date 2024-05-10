const name = "Avadhut"
const repoCount = 50

//console.log(name + repoCount + "Value");
// + is not used currently for concatation

//use String interpolation for concatation of String
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Avadhut") //try on Browser to check how string is written and string is object
//Check on Browser all funtion in String
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); //Original value will not change bcz it is stored in Stack
console.log(gameName.charAt(2));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0,3); // -ve value not consider
console.log(newString); //last value will not include

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne = "   Avadhut    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://avadhut.com/avadhut%20jadhav"
console.log(url.replace('%20','-'));
console.log(url.includes('avadhut'));