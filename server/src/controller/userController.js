const createJsonWebToken = require("../helper/jwt/jsonwebToken");
const User = require("../model/userModel");
const createError=require("http-errors");
const { secreteKey } = require("../secret");
const bcrypt = require("bcryptjs");


const home=((req,res,next)=>{
    try {
        res.status(200).send({
            message:"This is home pageTry",
            });
    } catch (error) {
        next(error)
    }

});

const user=((req,res,next)=>{
    const userData=req.user
    try {
        res.status(200).json({msg:userData}); 
    } catch (error) {
        next(error)
    }
});
const register=async(req,res,next)=>{
    try {
        // const username=req.body.username;
        // const email=req.body.email;
        // const phone=req.body.phone;
        // const password=req.body.password;
        // const address=req.body.address;
        const {username,email,phone,password,address}=req.body;

        
        const userExists=await User.exists({email:email});
        const token=createJsonWebToken(
            {username,email,phone,password,address},
            secreteKey,
            "30d"
        );
        if(userExists){
            // res.status(408).json({
            //     msg:"User already Exist"
            // })
            next(createError(409,"User EXIstssss"))
            next();
        }
        else{
            const userCreated=await User.create({username,email,phone,password,address});
            res.status(201).json({
                message:"User was created",
                token:token,
                userId:userCreated._id.toString()
            })

        }

        }
     catch (error) {
        // res.status(500).json({
        //     msg:error.message
        // });
        return next(error)
    }
}
const login=async(req,res,next)=>{
    try {
        
        const {email,password}=req.body;
        const userExists=await User.findOne({email});
        console.log("hello:",userExists);
        if(!userExists){
             return next(createError(400,"Invalid credintial"));
             next();
        }

        const user=await bcrypt.compare(password,userExists.password);
        
        const token=createJsonWebToken(
            {email,password},
            secreteKey,
            "30d"
        );
        if(!user){
            // res.status(408).json({
            //     msg:"User already Exist"
            // })
            next(createError(401,"password not EXIstssss"))
            next();
        }
        else{
            
            res.status(200).json({
                message:"Logging successfull",
                token:token,
                userId:userExists._id.toString()
            })

        }

        }
     catch (error) {
        // res.status(500).json({
        //     msg:error.message
        // });
        return next(error)
    }
}




module.exports={home,register,login,user}