const marvel =[ "Ironman" ,"Thor" , "Captain America" ]
const dc = [ "Batman" , "Superman" , "Flash"]

// marvel.push(dc);
// console.log(marvel);

// const newmarvel = marvel.concat(dc);
// console.log(newmarvel);

// const multiverse = [...marvel , ...dc]; // Spread operator to merge arrays
// console.log(multiverse);

const random = [1,2,3,4,[3,4,4],[3,3,[3,5]]]
const flatRandom = random.flat(Infinity) // Flatten the array to levels deep
console.log(flatRandom);

console.log(Array.isArray("marvel")); // Check if it's an array
console.log(Array.from("marvel")); 
console.log(Array.from({name: "marvel"})); 

let score1 = 10;
let score2 = 20;
let score3 = 30;

console.log(Array.of(score1, score2, score3)); // Create an array from values 




