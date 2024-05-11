// const tinderUser = new Object() //Singleton Objet
 const tinderUser = {} //both are same //Non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "avadhut@gmail.com",
    fullname: {
        userfullname:{
            firstname: "avadhut",
            lastname: "jadhav"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname); //? - used for if this value is not present then take precussion

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"B"}
const obj4 = {5: "a", 6:"B"}

// const obj3= {obj1, obj2}  //will create Problem obj inside obj

// const obj3 = Object.assign({},obj1, obj2, obj4)  //{} combine all in one obj it is optional, all value goes into empty array

const obj3 = {...obj1,...obj2} //Spread oprator mostly use
// console.log(obj3); 


//***********If value come from Database *
//Array of Object

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //less use

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//*******************Destrure */

const course ={
    coursename: "js i Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//course.courseInstructor //Not require to write full name always

const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);