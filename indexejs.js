import e from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = e();
const port = 3000;


//Function to get a date and set the message and type of day it is.
const d = new Date()
const today = d.getDay();
let type = "";
let message = "";
function weekOrEnd(req, res, next){
    if(today === 0 || today === 6){
        type = "Weekend";
        message = "time to fun and rest";
    }else{
        type = "Weekday";
        message =  "time for hard work and study";
    }
    next()
}

//middleware to handle the day of the week and message that will be displayied to the user
app.use(weekOrEnd);

//get index with render instead of sendFile this allows dinamism to the website, and we can use the type and variables used to modify the website.
app.get("/", (req, res) =>{
    res.render(__dirname + "/views/index.ejs", {dayType: type, advice: message})
})

app.listen(port, ()=>{
    console.log("Listening to port:", port)
})