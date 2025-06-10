// Arary

const myArray = [1, 2, 3, 4, 5];
const myArray2 = new Array(1, 2, 3, 4, 5);
const myMarvel = [ "Iron man", "Captain America", "Thor", "Hulk", "Black Widow" ,"Hawkeye" ];
// console.log(myArray);
// console.log(myArray2);
// console.log(myMarvel);

myArray.push(6); // Adds 6 to the end of the array
myArray.pop(); // Removes the last element from the array
myArray.unshift(0); // Adds 0 to the beginning of the array
myArray.shift(); // Removes the first element from the array
// console.log(myArray);

const newArray = myArray.join(); // Converts the array to a string
// console.log(newArray);

const na1 = myArray.slice(1, 3); // Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
console.log(na1);

const na2 = myArray.splice(1, 3); // Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
console.log(na2);