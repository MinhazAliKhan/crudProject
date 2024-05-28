const {body}=require("express-validator");


const validateUserLogin=[
    body('email')
    .trim()
    .notEmpty()
    .withMessage("Email is required"),
    // .isEmail()
    // .withMessage("Invalid Email Address"),
    body('password')
    .trim()
    .notEmpty()
    .withMessage("password is required")
    .isLength({min:6})
    .withMessage("Password should be at least 3 charecter long"),
    

    
];


module.exports=validateUserLogin;