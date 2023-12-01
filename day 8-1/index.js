// index
// 1) create a new object 
// 2) create a object inside an object 
// 3) create function inside the object 
// 4) access the object 
// 5 )upade the value 
// 6) remove the value  
// 7) remove the particular value 
// 8) access the particular value which is present inside the object 







// java Script --Object 
// object is in Key value pair 


let obj = {} // how be delceler an object
//-----------------------------
// creation of an object 
//--------------------------
let persion = {
    name: 'MRINAL',
    gae: '25',
    phone : '797976787',
    gender: 'mail',
    height: '5.7'

}

let car = {
    name :'Ferrari',
    Brand : 'Ferrari',
    color:'blue',
    price: '1000000000'
}
//-----------------------------
// example 3 
//-----------------------------

// object for captain America 

let cap = {
    firstName: 'steve',
    lastName: 'Rogers',
 // we ca add array as a key value pair   
    friends: ['Bucky' , 'John' , '  Doe' , 'Johndon'],
    age:104,
    isAverage: true,

    // we can add adderss in side an object

    Address :{
        state: 'Manhattan',
        city: 'San Francisco'
    },
    // we can write function in side the object 
    sayHii: function(){
        console.log("from function")
    }
}
// console.log(cap);// it will print all the object 

// // but i want to print some particular properties then we havr 
// //----------------------------------------------------------------
// //  dot Notation
// //----------------------------------------------------------------

// console.log(cap.firstName);
// console.log(cap.lastName);


// //----------------------------------------------------------------
// //  Brackets Notation
// //----------------------------------------------------------------
// console.log(cap['firstName']);

// // if i want to access address properties 
// // nested properties
// console.log(cap.Address.city);//San Francisco
// console.log(cap.friends);//[ 'Bucky', 'John', '  Doe', 'Johndon' ]

// // if i want to access some individual friend name 
// console.log(cap.friends[3]);
// // jondon


//--------------------------------------------------------------------------------------
// how we will access any function 
//--------------------------------------------------------------------------------------

// so in case of normal function we write function followed by function name 
// but in side the object we can write first function name as a key , then rest of the value 

cap.sayHii();// from function


// ----------------------------------------------------------------------------------------------------
//                        for Loop in case of object 
//------------------------------------------------------------------------------------------------  ----

for(let key in cap){
     console.log('key:',key,'value:',cap[key]);
}
 
//------------------------------------------------------------------------------------------------ 
// some important Methods 
//----------------------------------------------------------------

cap.isAverage  =false; // we can update the value like 

console.log(cap);

// 
// to add some properties 
cap.movies = ['age of earth' , 'jjdawa' , 'bajiraooo Mastani'];
console.log(cap);


// output 
// {
//     firstName: 'steve',
//     lastName: 'Rogers',
//     friends: [ 'Bucky', 'John', '  Doe', 'Johndon' ],
//     age: 104,
//     isAverage: false,
//     Address: { state: 'Manhattan', city: 'San Francisco' },
//     sayHii: [Function: sayHii],
//     movies: [ 'age of earth', 'jjdawa', 'bajiraooo Mastani' ]
//   }

// to delete something 

 delete cap.age; // 
 console.log(cap);


 // output -->
//  {
//     firstName: 'steve',
//     lastName: 'Rogers',
//     friends: [ 'Bucky', 'John', '  Doe', 'Johndon' ],
//     isAverage: false,
//     Address: { state: 'Manhattan', city: 'San Francisco' },
//     sayHii: [Function: sayHii],
//     movies: [ 'age of earth', 'jjdawa', 'bajiraooo Mastani' ]
//   }
