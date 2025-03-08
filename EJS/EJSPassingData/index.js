import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {  
  // let fullLength = 0;
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  // const reqBody = req.body;
  let Fname = req.body.fName;
  let Lname = req.body.lName;
  let fullLength = Fname.length + Lname.length;
  const data = {
    lengthOfLetters : fullLength
  };
  res.render("index.ejs",data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
