//-------------------------------------------
// directories 
//----------------------------------------------------------------

// we will see -->
// 1) createDirectory
// 2) deleteDirectory
// 3)check if directory exists
// 4)status
// 5) content 


const fileSystem  = require('fs')
// fileSystem.mkdirSync('myDirectory')

// console.log('Creating directory');


// remove directory

// rmdir--> method 

// fileSystem.rmdirSync('myDirectory')
// console.log('Removing directory');

// check if directory exists or not 

// method --> existSync-->it will return true or false
let doesExist = fileSystem.existsSync('myDirectory')


console.log(doesExist);// false

//------------status of directory
//-------------------------------
// method -->   lstatSync -->
let status = fileSystem.lstatSync('myDirectory')
console.log(status);

// output ---------->
// Stats {
//     dev: 3705463822,
//     mode: 16822,
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: 4096,
//     ino: 133419138960853650,
//     size: 0,
//     blocks: 0,
//     atimeMs: 1701468869872.2407,
//     mtimeMs: 1701468869869.66,
//     ctimeMs: 1701468869869.66,
//     birthtimeMs: 1701468869869.66,
//     atime: 2023-12-01T22:14:29.872Z,
//     mtime: 2023-12-01T22:14:29.870Z,
//     ctime: 2023-12-01T22:14:29.870Z,
//     birthtime: 2023-12-01T22:14:29.870Z
//   }


//---------we can use two method to fetch data from give upper output 

console.log('is File ?',status.isFile());
console.log('is Directory',status.isDirectory());

// output------>
// is File ? false
// is Directory true







