const {validationResult}=require("express-validator");
const createError=require("http-errors");
const runValidation=(req,res,next)=>{
    try {
        const error=validationResult(req);
        if(!error.isEmpty()){
            console.log(error.array()[0].msg);
            return next(createError(422,error.array()[0].msg));
        }
        return next()
    } catch (error) {
        return next(error)
    }
}

module.exports=runValidation