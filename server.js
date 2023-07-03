const express = require('express');
const serverConfig = require('./configs/sever.config');
const mongoose = require ('mongoose');
const dbConfig = require('./configs/db.config');
const userModel = require('./models/user.model');
const bcrypt = require ('bcrypt');




const app = express();

/**
 * to connect mongoose to mongoDB we have active running account on mongoDB
 */
mongoose.connect(dbConfig.DB_URL);
const db =mongoose.connection;

db.on("error",()=>{
    console.log("error while connecting to DB");
})
db.once("open",()=>{
    console.log("DB is connected");
    init();
})
async function init(){
    /**
     * Initialise the mongodb
     * need to create the ADMIN user 
     */
    let admin = userModel.findOne({
        userId:"admin"
    })
    
    if(admin){
        console.log("Admin user already present");
        return;
    }
    const admin = await userModel.create({
        name:"Vishwa Mohan",
        userId:"admin",
        email:"shreetikagmm123@gmail.com",
        userType:"ADMIN",
        password :bcrypt.hashSync("Welcome1",8)
    });
    
    console.log(admin);

}
app.listen(serverConfig.PORT,()=>{
    console.log("server is running");
})