require("dotenv").config();
const cors= require("cors")
const express= require("express");
const mongo = require("./shared/mongo")
const app=express();
const resetRoute=require("./Routes/resetPassword.routes");
const userRoutes=require("./Routes/users.routes");
(async()=>{


try{

    await mongo.connect()

    app.use(cors())

    app.use(express.json())

    app.use("/users",userRoutes)

    app.use("/resetPassword",resetRoute)

const port= process.env.PORT || 3001;

app.listen(port,()=>{
        console.log("server running in port ",port)
 })
}
catch(err)
{
    console.log("Error in connecting DB",err)
}
})()

