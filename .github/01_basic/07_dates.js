//   dates 

let myDate = new Date();
console.log(myDate.toString()); 
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getFullYear());



let myDate2 = new Date(2023, 0, 1); // January 1, 2023
console.log(myDate2.toString());
let myDate3 = new Date("2023-01-01T00:00:00Z"); // ISO format
console.log(myDate3.toString());

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMilliseconds());


newDate.toLocaleDateString('default' 
  )



