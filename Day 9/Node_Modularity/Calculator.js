function add(a,b){
    console.log('sum is ', a+b);

}
function sub(a,b){
    console.log('sun is ', a-b);
}
function mul(a,b){
    console.log('mul is ', a*b);
}
function div(a,b){
    console.log('div is '+ a/b);
}
// add(2,4)
// sub(4,1);
// mul(3,8);
// div(6,2);

// in place of calling the function we can write like 
//and we can make same output using my own module 
// we can do same work with my own module

// to create our own module we need to write as 
module.exports = {
    Addition :aimmoddd,
    Substraction :sub,
    Multiply: mul,
    Division: div
}


// module.exports is a object provided by Node.js by 
// which u can export ur function in key value pairs
// u will ur function with the keys your have assigned to them 
