//Primitive(Call by Value)
//7 types : String ,Number, Boolean, Null, Undefined, BigInt, Symbol

let userEmail; // Stored Undefined
//console.log(userEmail);

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const outsideTemp= null;  //Object

const bigNumber = 34556655879987n //bigInt

//console.log(typeof bigNumber);

//Refereance (Non Primitive)
//Array, Object, Functions

const heros = ["shaktiman", "naagraj", "dooga"];

let myObj ={
    name: "Avadhut",
    age:25
}

const myFunction = function (){
        console.log("Hello World");
}  // funtion Object datatype

//***************************** Memory in JS *******************************

// Stack(Primitive), Heap (Non- Primitive)

let myYoutubename = "avadhutdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);


let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "avadhut@google.com"

console.log(userOne);   //call by Refreance
console.log(userTwo);