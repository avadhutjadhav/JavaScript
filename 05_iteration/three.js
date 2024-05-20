// for of

// ["", "", ""]
// [{}, {}, {}]

//forof loop for array
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

//forof loop for string
const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}


//For Map funtion
// Maps (key-value paire and remember order, Unique value only)

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
//[] use for array distructor
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

//For Object but it object is not iterable we have require to use another way to iterate object
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}