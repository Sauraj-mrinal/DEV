// if u want to use some module then u have to use require 

 const cp = require('child_process');
 console.log("calculator in opening");

 cp.execSync('calc');
 console.log('calculator is opend ');


 // also we can access the js file or other file using 

 let jsFile = cp.execSync('node test.js');
 console.log(jsFile);

 //

