const user = {
    username: "Tarun",
    price :99,
   welcomeMessage: function (){
        console.log(`${this.username} , welcome to the website`);

    }
}
// user.welcomeMessage();
// // Arrow functions do not have their own 'this' context
// user.username ="sam";
// user.welcomeMessage()


 function my() {
    let username= "Tarun";
    console.log(this.username);
    
}
my();
const myArrow =() =>{
      let username= "Tarun";
    console.log(this.username);
    
}
myArrow();
// Arrow functions do not have their own 'this' context
// In the above example, 'this' in myArrow does not refer to the global object


// addTwo =(num1 , num2 ) => {
//     return num1 + num2;
// }
// console.log(addTwo(10, 20)); 
 addTwo =(num1 , num2 ) => (num1 + num2 )
// The above function is an arrow function that returns the sum of num1 and num2
// It uses an implicit return, which is a feature of arrow functions when the body is a
   addTwo =(num1 , num2) => ({username: "Tarun"})

   

console.log(addTwo(2, 2)); 
