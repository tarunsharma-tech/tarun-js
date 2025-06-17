//  Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined. It is a common design pattern used to create a private scope for variables and functions, preventing them from polluting the global namespace.

// function myiife() {
//     console.log("DB CONNECTED" ); 
// }
// myiife();

(function myiife() {
    console.log("DB CONNECTED" ); 
})(); // This is an IIFE, it runs immediately after it's defined

// to remove the global scope pollution