//routes provide mapping between incoming requests and thw code should handle it


const express = require("express");

//Routers in Express are middleware that allow you to define groups 
//of routes separately and then use them in your application.
const router = express.Router();

//import the createTodo function as this function handles the logic to create a Todo item
const {createTodo } = require ("../controllers/createTodo");
const {getTodo,getTodoById } = require ("../controllers/getTodo");        //for the getTodo routes
const {updateTodo} = require ("../controllers/updateTodo");//for the updateTodo Routes
const {deleteTodo} = require ("../controllers/deleteTodo");//for the deleteTodo Routes

//whenever post req. is made tp "/createTodo ",Express invoke createTodo function 
//basically mapping create and get Todo route to their paths
router.post("/createTodo",createTodo); 
router.get("/getTodo",getTodo); 
router.get("/getTodo/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo); 

module.exports = router;

