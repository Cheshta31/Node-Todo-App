//handles logic for getting a Todo item


//Todo model(model based on Todo Schema) import as we need to insert data in database.
const Todo = require("../models/Todo");

//getTodo is a function that is meant to handle HTTP GET request to get new Todo entries.
exports.getTodo = async (req,res) => {
    try{
        //fetch all todo item from the database 
        const response = await Todo.find({});
        //send a JSON response that entry was fetched successfully.
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"All entry fetched Successfully"
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
exports.getTodoById = async (req,res) => {
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id:id})
        if(!todo)
            {
                return res.status(404).json(
                    {
                        success:false,
                        message:"No Data Found With Given Id",
                    }
                )
            }
        else
        {
            res.status(200).json({
                success:true,
                data:todo,
                message:`Todo ${id} data successfully found`,
            })
        }
    }   
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error",
        });
    }
}