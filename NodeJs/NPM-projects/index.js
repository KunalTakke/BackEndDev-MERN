import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

/*
1. Use inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

inquirer
  .prompt([
    {
        type: "input",
        name: "URL",
        message: "Type in your URL :" 
    }
  ])
  .then((answers) => {
    var url = answers.URL;
    var png = qr.image(url,{type: 'png'});
    png.pipe(fs.createWriteStream('qr_img.png'));
    fs.writeFile("./user-input.txt",url, (err)=>{
        if (err) throw err;
        console.log("The file has been saved !");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

