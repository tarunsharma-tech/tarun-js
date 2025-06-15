function sayMyName() {
    console.log("TARUN");          
}
// sayMyName(); // Calling the function to execute it

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
// addTwoNumbers(7,3); // Calling the function with arguments 7 and 3
function addTwoNumbers(number1, number2){

    let result = number1+number2;
    return result; // Returning the result of the addition
}
const result= addTwoNumbers(7,3); // Calling the function with arguments 7 and 3
// console.log("result is: " + result); // Logging the result to the console

function loginUser(username){
    return `${username} just logged in`;
}
// console.log(loginUser("Tarun")); // Calling the function with the username "Tarun"

function calculateAddPrice(...num1){        // ...num1 is a rest parameter that allows the function to accept any number of arguments
    return num1
}
// console.log(calculateAddPrice(1,2,3,4,5)); // Calling the function with multiple arguments


const user= {
    username: 'Tarun',
    place : 'India',

}
function handleobject(anyObject){
    // console.log(`Username is ${anyObject.username} and place is ${anyObject.place}`);
}
handleobject(user)

myNewArray=[34,4,34,45,645,]
function handelarray(anyArray){
    return anyArray[2]
}
console.log(handelarray(myNewArray)); // Calling the function with an array to get the third element
