

// function addTwoNumbers(num1, num2){
//     console.log( num1+num2);
// }
function addTwoNumbers(num1, num2){
    return ( num1+num2);
}


const result =addTwoNumbers(4,5)  //4,5 is arguments, num1 and num2 is parameters
// console.log(`Result : ${result}`);

function loginUserMessage(username ="sam"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return //after return code will not excute
    // }
    if(!username){
        console.log("Please enter a username");
        return //after return code will not excute
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("avadhut"));
//console.log(loginUserMessage());  //Interview Q

//sam default value send


//***************************Function 2 */

function calculateCartPrice(val1,val2,... num1){
    return num1 
}

// console.log(calculateCartPrice(200,400,500)); //[ 200, 400, 500 ] rest operator bundle it in array
// console.log(calculateCartPrice(200,400,500,2000));

const user ={
    username: "avadhut",
    price: 199
}

function handleObject(anyobject){
    console.log(`usernaame is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) //Suppose price changes to prices then it will give error therefor pass obk=ject direct
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function retrunSecondValue(getArray){
    return getArray[1]
}

// console.log(retrunSecondValue(myNewArray));
console.log(retrunSecondValue([200,400,100,600]));