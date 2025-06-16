
let a =5;
if (true){
let a = 10;
const b = 20;
}
// console.log(a);
// console.log(b);
// Output: ReferenceError: a is not defined
// Output: ReferenceError: b is not defined
// Explanation: 'a' and 'b' are block-scoped variables declared with 'let' and 'const' respectively.
// They are not accessible outside the block in which they were defined.


function one (){
    const username = 'Tarun'


function two (){
    const web = 'javascript,'
    console.log(username);

}
// console.log(web);
// two();

}one();


if (true) {
    const username = 'Tarun';
    if(username === 'Tarun'){
        const web = 'YouTube';
        // console.log(`${username} ${web}`)
    }
    // console.log(username);
}
// console.log(web);

///////////////////

function addOne(num) {
    return num - 1;
}


console.log(addOne(4))

const addTwo = function(num) {
    return num + 2;
}
console.log(addTwo(4));
