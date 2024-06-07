const mongoose = require("mongoose");

//make sure that variables defined inside .env file are avaiable inside nodeJs enviroment.  
require("dotenv").config();         

//function used to connect to mongodb
const dbConnect = () => {

    //process.env is used to retrive configuartion values that are set for nodejs process.
    mongoose.connect(process.env.DATABASE_URL, {

        //configure connections to use mongodb latest driver features
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    //the above code will return a promise

    .then( () => console.log("Database Connected Successfully"))
    .catch( (e) => {console.log("Failure")
    console.error(e.message);
    //process.exit(1) = process will be terminates due to some error
    process.exit(1);
})
};

//some other module can import it as a reference and use to establish connection with database

module.exports=dbConnect;