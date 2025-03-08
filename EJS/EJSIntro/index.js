import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.get("/",(req,res)=>{
    const d = new Date();
    let day = d.getDay()
    var whichDay="";
    var activity="";
    if(day === 0 || day === 6){
        whichDay = "weekend";
        activity = "have fun";
    }else{
        whichDay = "weekday";
        activity = "work hard";
    }
    res.render(__dirname+"/views/index.ejs",{day: whichDay,activity: activity});
});


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});