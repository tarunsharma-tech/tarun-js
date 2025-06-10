// literal object


const mysym = Symbol("mySymbol");


const myProfile ={
    name : "Tarun",
 [mysym] : "mykey1"   ,  //This is a symbol property",
    "full name" : "Tarun Sharma",
    age : 19,
    isActive : true,
    hobbies : ["coding", "gaming", "reading"],
    city : "Delhi",
    lastlogin : new Date(),
}

// console.log(myProfile);
// console.log(myProfile["name"]);
// console.log(myProfile.name);
// console.log(myProfile["full name"]);
// console.log(myProfile[lastlogin]); // Accessing lastlogin property WRONG WAY
// console.log(myProfile["lastlogin"]); // Accessing lastlogin property with quotes

// console.log(myProfile[mysym]); // Accessing symbol property

// function inside object
myProfile.greeting = function() {
    console.log("Hello JS user")
    
}
myProfile.greeting2 = function() {
    console.log(`hello , ${this.name}`);
    

}

    console.log(myProfile.greeting()); // Calling function inside object
    console.log(myProfile.greeting2()); // Calling function inside object with template literal
    