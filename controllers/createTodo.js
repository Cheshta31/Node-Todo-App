//handles logic for creating a Todo item


//Todo model(model based on Todo Schema) import as we need to insert data in database.
const Todo = require("../models/Todo");

//createTodo is a function that is meant to handle HTTP POST request to create new Todo entries.
exports.createTodo = async (req,res) => {
    try{
        //extract title and description from the request body and assigining them the same name
        const {title,description} = req.body;

        //passes an object with title and description properties to create a new Todo entry in the database
        //await keyword waits for this operation to complete and assigns the result to the response variable.
        const response = await Todo.create({title,description});

        //send a JSON response that entry was created successfully.
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created Successfully"
            }
        );
    }
    catch(e){
        console.error(e);      //used to log error message    
        console.log(e);    //used to log error message without represeting it is an error message
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:e.message,
        })

    }
}