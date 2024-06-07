//handles logic for updating a Todo item uswing particular Id


//Todo model(model based on Todo Schema) import as we need to insert data in database.
const Todo = require("../models/Todo");

//updateTodo is a function that is meant to handle HTTP PUT request to update new Todo entries.
exports.updateTodo = async (req,res) => {
    try{
        //extract id from the request params and assigining them the same name
        const {id} = req.params;
        const {title,description} = req.body;

        //find and update the id from database and store it in response
        const todo = await Todo.findByIdAndUpdate({_id:id},
            {title,
            description,
            updatedAt:Date.now()
        },
        {new:true}
        )

        //send a JSON response that entry was created successfully.
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:"Entry updated Successfully",
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