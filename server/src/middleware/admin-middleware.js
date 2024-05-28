const adminMiddleware=async(req,res,next)=>{
   try {
    const user=req.user;
    if(!user.isAdmin){
      return res.status(403).json({
         msg:"Access denied Not an admin"
      })
    }
    next();
   } catch (error) {
    next(error);
   }
}
module.exports=adminMiddleware