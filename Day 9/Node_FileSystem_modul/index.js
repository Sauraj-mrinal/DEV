




// File System Module 




// ****  files       ****//


const fileSystem  = require('fs')

// i want to perform the  CRUD with the file 

// Read the file
// to read the file we have a method readFileSync

let content = fileSystem.readFileSync('file.txt');
console.log(content);
// output 

/* <Buffer 68 69 69 20 6d 
79 20 6e 61 6d 
65 20 69 73 20 6d
 72 69 6e 61 6c 
 20 0d 0a 61 6e 64
  20 6e 6f 77 20 74 
  72 79 20 74 6f 20 6c 
  65 61 76 65 20 74 68
   65 20 65 ... 28 more bytes> */

   // so it will return in buff FORMATTE

   // if we want it into string formate 
   // then we have to concat it with the string format 
   console.log('this is my File Data ->'+ content); // this process is known as concat 
   // output -->
//    this is my File Data ->hii my name is mrinal
// and now try to leave the earth as soon as possible




















