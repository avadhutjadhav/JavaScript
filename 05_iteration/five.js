const coding = ["js", "ruby", "java", "python", "cpp"]

//Callback function : No name direct write parameter
// coding.forEach( function (val){
//     console.log(val);
// } )
//************************************* */
//With Arrow funtion
// coding.forEach( (item) => {
//     console.log(item);
// } )

//*************************************************** */

//by using funtion (Just give refreance don't excute that time)
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

//*************************** */
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
//******************************************* */
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )