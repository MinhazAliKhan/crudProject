
const createError=require("http-errors");
const Contact = require("../model/contact-model");




const contact=async(req,res,next)=>{
    try {
       
        const {username,email,message}=req.body;
        const contact=await Contact.create({username,email,message});
            res.status(201).json({
                message:"Message was Send",
            })

        

        }
     catch (error) {
        
        return next(error)
    }
}



module.exports=contact