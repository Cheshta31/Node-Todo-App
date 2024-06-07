const mongoose = require("mongoose");

//defines mongoose Schema for a "Todo" document
const todoSchema = new mongoose.Schema(
    {
        title : {
            type:String,
            required : true,
            maxLength : 50,
        },
        description : {
            type:String,
            required : true,
            maxLength : 50,
        },
        createdAt : {
            type:String,
            required : true,
            default : Date.now(),
        },
        updatedAt : {
            type:Date,
            required : true,
            default : Date.now(),
        }
    }
);

//export a mongoose model named "Todo" based on todoSchema
module.exports = mongoose.model("Todo",todoSchema);
