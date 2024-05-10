let myDate = new Date()

// console.log(typeof myDate); //Object
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2024, 0 , 23) //Month start from 0
// let myCreatedDate = new Date(2024, 0 , 23, 5, 3) 
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2023-01-14") //Month start from 01 in YYYY-MM-DD
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);  //milisecond
//console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());

// `${newDate.getDay()} `

//Press Ctrl+Space to show all prop.
newDate.toLocaleString('default',{
     weekday: "long"
     timeZone
})





