const loggedIn=(req,res,next)=>{
    const login=true;
    if (login){
        req.body.id=102;
        next();
    }
    else{
        return res.status(401).json({
            message:"please login first",
            
        })
    }
}
module.exports=loggedIn