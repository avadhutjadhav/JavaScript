//Sigleton Object
//Object.create

//Object literals

const mySym = Symbol("key1")  //Interview Q. add symbol in Object


const JsUser = {
    name:"Avadhut",
    "full name": "Avadhut Jadhav",
    [mySym]:"myKey1",
    age: 25,
    location:"Pune",
    email:"avadhut@google.com",
    isLoggedIn: false,
    lastLoggingDays: ["Monday","Saturday"]

}           //name is trated as string

// console.log(JsUser.email);  
// console.log(JsUser["email"]); //Use this way to fetch value, bcz full name choudn't fetch by using this way
// console.log(JsUser["full name"]); 
// console.log(JsUser[mySym]); 
// console.log(typeof JsUser[mySym]); 


//To change value
JsUser.email = "avadhut@123.com"
// Object.freeze(JsUser) //Object will not change
JsUser.email = "avdhut@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
}
// console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo()); 
