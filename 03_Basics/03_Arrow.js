const user = {
    username :"avadhut",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website`);
        // console.log(this); //It will give u current context
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage() //username is changed

// console.log(this); //It will give empty {} object bcz it is node Env and there is no object in global context

// function chai(){
//     let username = "avadhut"
//     console.log(this.username); //undefined, it is work in object only
// }

// chai()


//********************Arrow Funtion************* */

const chai = ()=>{
    let username = "avadhut"
    // console.log(this.username);
    // console.log(this); //It will five {} empty object
}
chai()

// const addTwo=(num1, num2)=>{
//     return (num1+num2)
// }

//Implicite Return
// const addTwo=(num1, num2)=> (num1+num2) //{} write then rturn also require to write

// const addTwo = (num1, num2) => ({username: "avadhut"})
// const addTwo = (num1, num2) => {
//    return {username: "avadhut"}
// }
console.log( addTwo(3,4));


