// ----------------------------------------------------------------
//                                   File System Organizer 
// ----------------------------------------------------------------

// features of the Project
// if u have numbers Files in a folder and they are not properly arranged
// so you can use this tool to arrange them in a specific folder/Directory according to thair extension
// like textfile willl go into text File Folder , .exe file go into exe folder 
// and at the end we have a arranged SET of file in specific folder 



//------------------------------------------------------------------------------------------------------------------
//-----------------------**********************----------------------------------------------------------------
//-----------------------**********************----------------------------------------------------------------

// js me input array ke format me jata hai and this array we can process through-> process.argv




// if u want to take an input through CMD 
// it it will come like Array format


// let input  =  process.argv[2]; // whatever u write in javaScript it 
// javaScript will take an input in process.argv
// and it is like an array

// so it is automatically initialized with 
// argv[0] = node 
// argv[1] = FO.js 
// argv[2] = Mrinal

// if we want to print my name then we need to write it like 
// argv[2] =

//console.log(input);
//---------------------------------------------------------------------------------------------------------------------------

// let input  =  process.argv;
// argv[0] = node (command)
// argv[1] = FO.js 
// argv[2] = orgsnize
//argv[3] = folderPath

// so we will ise slice--> method of array
let input  =  process.argv.slice(2);
let inputArray = input;
console.log(inputArray);// ye zero index and 1 index ko chhor ke baki ko array me de dega as a input variable 


let command = inputArray[0];// to take command 
// organize
// [ 'organize' ]
//Organize Implemented
switch(command){
     case 'tree':
        console.log('tree Implemented');
        break;

    case 'organize':
        console.log('Organize Implemented');
        break;
    
    case 'help':
        helpFun();
        console.log('Help Implemented');
        break;
}

// Help function will list all the ways by which you can run the commands of this project.
function helpFun(){
    console.log(`list of all the commands->
    
                              1)Tree - node FO.js tree <directory path>
                              2) organize - node FO.js organize <directory path>
                              3) help - node FO.js help <directory path>
    `);

}











