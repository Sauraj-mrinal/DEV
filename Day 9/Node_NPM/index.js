// NPM - NODE PACKAGE MANAGER 

const figlet = require('figlet');


figlet("Mrinal", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });