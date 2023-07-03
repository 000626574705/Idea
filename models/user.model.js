/**
 * this will hold schema for models\
 * it explains different fields and it will be stored
 * 
 */
const mongoose = require('mongoose');


const userSchema =new mongoose.Schema({
    name :{
        type:String,
        required : true
    },
    UserId :{
        type: String,
        required: true,
        unique : true,
    },
    password :{
        type:String,
        required :true,
    },
    email:{
        type:String,
        required: true,
        minlength :10,
        lowercase:true,
    },
    userType:{
        type :String,
        required :true,
        default: "Customer",
        enum :["customer","Admin"]
    }
},{timestamps:true,});

/**
 * defining the  collection name where it to be stored
 * 
 * 
 */

mongoose.model("User",userSchema);