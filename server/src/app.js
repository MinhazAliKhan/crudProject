const express=require("express");
const app=express();
const morgan=require("morgan");
// const loggedIn = require("../middleware/loggin");
const createError=require("http-errors");
const userRouter = require("./router/userRouter");
const contactRouter = require("./router/contact-router");
const cors=require("cors");

const adminrouter = require("./router/admin-route");

const corsOption={
    origin:"http://localhost:5173",
    method:"POST,GET,DELETE,PUT,PATCH,HEAD",
    Credential:true
}


app.use(cors(corsOption));
app.use (morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use("/api/user",userRouter);
app.use("/api/user",contactRouter);
app.use("/api/admin",adminrouter)




app.use((req,res,next)=>{
    next(createError(404,"Route not Found"));
});
app.use((err,req,res,next)=>{
    return   res.status(err.status || 500).json({
        success:false,
        message:err.message
    })
});

module.exports=app