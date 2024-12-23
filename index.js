/*
First thing we need to do is NPM init, to install the package. ( Remember to change the type to module)
I'll create the server with npm i express ( This installs the express framework )
*/

//import the express framework
import express from "express";
//the variable hold the main express function
const app = express();
//variable for the port
const port = 3000;

app.listen(port, (err) =>{
    console.log(`Listening to port ${port}.`)
})
