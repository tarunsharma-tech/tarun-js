// const instauser = new Object()
const instauser ={ }
    instauser.id ="abc12",
    instauser.name = "Tarun",
    instauser.handle= "@tarunsharma",
    instauser.bio= "Web Developer | Tech Enthusiast"
   

    // console.log(instauser);

    const fbUser ={
  email: "tarunsharma@fb.com",
    regularUser :{
        fullname :{
            firstname :"Tarun",
            lastname :"Sharma"
        }
    }
}
    // console.log(fbUser.regularUser);

    const obj1 ={1: "a" , 2 :"b"}  

    const obj2 ={3: "c" , 4 :"d"} 
    
    // const obj3 = Object.assign({}, obj1, obj2); // Merging two objects
    const obj3 = {...obj1, ...obj2 } // Merging two objects using spread operator
    // console.log(obj3) ;

    const user= [
        {
        id : "1",
        email : "ab@gmail.com"
    },
    {
        id : "2",
        email : "bb@gmail.com"
    }
    ,{
        id : "3",
        email : "bc@gmail.com"
    }
]
// user[1].email
// // console.log(user[1].email); // Accessing email of second user in array of objects
// console.log(instauser);
// console.log(Object.keys(instauser)); // Getting keys of instauser object
// console.log(Object.values(instauser)); // Getting values of instauser object
// console.log(Object.entries(instauser)); // Getting entries of instauser object
//  console.log(instauser.hasOwnProperty("id")); // Checking if instauser object has id property
 
    
    const sneakers ={
        brand: "Nike",
        model: "Air Max",
        size: 10,
        color: "Black",
        price: 120,
        inStock: true,
        
        }
    sneakers.price
const{color} =sneakers; // Destructuring sneakers object
console.log(color)

// {
//     "brand": "Nike",
//     "model": "Air Max",
//     "size": 10,
//     "color": "Black",
//     "price": 120,
// }
// JSON representation of sneakers object

[
    {},
    {},
    {}
]