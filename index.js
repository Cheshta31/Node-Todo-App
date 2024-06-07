//create an application instance of Express and named it as app
const express = require("express");
const app=express();

//loads the envirmoent variable into process.env using dotenv package and set the POST
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//Express to apply the express.json() middleware for all incoming requests to your application. 
//This ensures that any request with a JSON payload will have its body parsed, and the resulting JSON
// data will be available for further processing in your route handlers using req.body.
app.use(express.json()); 

//import todo file from woutes into todoRoutes and mounts it with /api/v1
//any req with path start /api/v1 will be routed to routes defined in todoRoutes
const todoRoutes = require("./routes/todo");
app.use("/api/v1", todoRoutes);

app.listen(PORT,() => {
    console.log(`Server Successfully Established at ${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

//define default route that whenever root directory or home page is used a get request is made printing homepage
app.get("/", (req,res) => {
    res.send(`<h1> HomePage </h1>`);
})