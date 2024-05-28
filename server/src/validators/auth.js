const {body}=require("express-validator");

const validateUserRegistration=[
    body('username')
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({min:3,max:31})
    .withMessage("Name should be at least 3-31 charecter long"),
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
    body('address')
    .trim()
    .notEmpty()
    .withMessage("Address is required")
    .isLength({min:3,max:31})
    .withMessage("Address should be at least 3-31 charecter long"),
    body('phone')
    .trim()
    .notEmpty()
    .withMessage("Phone is required"),

    
];



module.exports= validateUserRegistration;