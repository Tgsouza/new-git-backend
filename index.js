//import the express framework
import express from "express";
//Import dirname and FileURLToPath which will be needed to get the path when sending a file to the server
import {dirname} from "path";
import { fileURLToPath } from "url";
//Import Body-parser object to create middlewares.
import bodyParser from "body-parser";
//Import morgan used to logg requests
import morgan from "morgan";



const __dirname = dirname(fileURLToPath(import.meta.url));
//the variable hold the main express function
const app = express();
//variable for the port
const port = 3000;

/// THESE ARE MIDDLEWARES ///
//We are going to use(express method) the body parser as a piece of middleware to pass the piece of information coming from the form on index in order to send this information on the post request 
app.use(bodyParser.urlencoded({extended: true})); //This creates a body for URL encoded requests like form submission. 

app.use(morgan("common"));//This logs the requests using the middleware morgan.

//Custom middleware function to log the method, url and ip took from the request.
function logger(req){
    console.log("Request method: ",req.method, req.url, req.ip);
}
app.use((req, res, next)=>{logger(req);next();}) //Use of the custom middleware function. The next() ensures that the app will jump to the next part of the code once the function is finished.

//The post submit method will hit the route on the form
app.post("/submit", (req, res) =>{
    console.log(req.body);
})


//The app sends the file using the directory name and the path of our index html
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.get("/about", (req, res) =>{
    res.send("<h1>This is about</h1>");
})

app.get("/contact", (req, res) =>{
    res.send("<h1>Tell me why</h1>");
})

app.listen(port, () =>{
    console.log(`Listening to port ${port}.`)
})
















//These are tests for postman
// app.post("/register", (req, res)=>{
//     res.sendStatus(201);
// })

// app.put("/user/thiago", (req, res)=>{
//     res.sendStatus(200);
// })

// app.patch("/user/thiago", (req, res) =>{
//     res.sendStatus(200);
// })

// app.delete("/user/thiago", (req, res)=>{
//     res.sendStatus(200);
// })

//This calles express and use the function listen, which is listening to the port (3000), and uses a call back function to make sure the server is running with a console log
