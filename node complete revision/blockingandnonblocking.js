// Synchronous or blocking
// --line by line execution

//Asynchronous or non-blocking
//--line by line not gurranted
//--callback is fired
//None-blocking i/o Model
//Async

const fs = require("fs");
let text = fs.readFile("test.txt","utf-8", (err,data)=>{
    console.log(data)
});
console.log("This is a message");