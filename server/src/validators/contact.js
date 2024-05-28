const {body}=require("express-validator");


const validateContact=[
    body('username')
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({min:3,max:31})
    .withMessage("Name should be at least 3-31 charecter long"),
    body('email')
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email Address"),
    body('message')
    .trim()
    .notEmpty()
    .withMessage("message is required"),

    
];



module.exports=validateContact;