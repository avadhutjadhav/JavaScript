const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman","flash","batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] //Spred operator 

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array); //Spread out all values

console.log(Array.isArray("Avadhut"));
console.log(Array.from("Avadhut"));
console.log(Array.from({name: "Jadhav"}));  //INTERSTING: they didn't know for which array require to make key or value

let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1,score2,score3));