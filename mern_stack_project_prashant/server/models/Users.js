// model information is going to mongodb database
// app_curd. 

const mongoose = require("mongoose")

// lets create our schema for our model. 
const UserSchema = new mongoose.Schema(
    {
        name : {type: String, required : true},
        email : {type: String, required : true},
        age : {type: String, required : true},
        address : {type: String, required : true},
    },
    {
        timestamps : true,
    }
)

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;