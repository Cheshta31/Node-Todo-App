//handles logic for delete a Todo item uswing particular Id


//Todo model(model based on Todo Schema) import as we need to insert data in database.
const Todo = require("../models/Todo");

//deleteTodo is a function that is meant to handle HTTP DELETE request to delete new Todo entries.
exports.deleteTodo = async (req,res) => {
    try{
        //extract id from the request params and assigining them the same name
        const {id} = req.params;

        //find and update the id from database and store it in response
        await Todo.findByIdAndDelete({_id:id}
        )

        //send a JSON response that entry was created successfully.
        res.status(200).json(
            {
                success:true,
                message:"Entry deleted Successfully",
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