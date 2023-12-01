



// const path = require('path')
// let filePath = "E:\\pepDev\\DEV\\Day 10";
// // we have to make double slashes in place of single slashes to accept my path


// //-------------------------------- 
// //some functions of path module
// //---------------------------------

// // let extensionName  = path.extname(filePath)--> this will print the extension name for the file
// let extensionName  = path.extname(filePath);
// console.log(extensionName);
// // this will print the extension name for the file

// let fileName  = path.basename(filePath)
// console.log(fileName); // this will print the full name for the file that was created.

// ------------------------------------------------------------------------------------------------
//                          more examples
//-------------------------------------------------------------------------------------------------------


const path = require('path')
let filePath1 = "file:///E:/notes_coding%20ninja/19.%20Notes%20-%20JQuery.pdf"


// to know the extension 
let extensionName1 = path.extname(filePath1)
console.log(extensionName1);//.pdf

// to know the full name or base name 
const fullname = path.basename(filePath1)
console.log(fullname);// 19.%20Notes%20-%20JQuery.pdf

console.log(__dirname);// this will give us directory name 
//E:\pepDev\DEV\day 8-1\Node_Path_Module


console.log(__filename);// this will give us file name 
// PS E:\pepDev\DEV\day 8-1\Node_Path_Module>







