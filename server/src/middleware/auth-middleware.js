const jwt=require("jsonwebtoken");
const { secreteKey } = require("../secret");
const User = require("../model/userModel");

const authMiddleware=async(req,res,next)=>{
  const token=req.header("Authorization");
  
   if(!token){
    return res.status(401).json({
        msg:"Unathorizeed HTTP, Token Not Foud"
    });
}
    // console.log(token);
    const jwtToken=token.replace("Bearer","").trim();
    // console.log("hello:",jwtToken);
    try {
        const isVerified=jwt.verify(jwtToken,secreteKey);
        // console.log(isVerified);
        const userData=await User.findOne({email:isVerified.email}).select({password:0});
        // console.log(userData);
        req.user=userData;
        req.token=token;
        req.id=userData._id;
        
    } catch (error) {
        
    }
    next();
   }


module.exports=authMiddleware