//using native node module for creating a file 
const fs = require("fs");
// fs.writeFile("message1.txt","Hello from NodeJS",(err)=>{
//     if (err) throw err;
//     console.log("This file has been saved");
// });

fs.readFile("./message1.txt", "utf-8",(err,data)=>{
    if (err) throw err;
    console.log(data);
});