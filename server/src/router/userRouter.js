const express=require("express");
const { home, getUser, register, login, user } = require("../controller/userController");
const validateUserRegistration = require("../validators/auth");
const runValidation = require("../validators");
const validateUserLogin = require("../validators/authLogin");
const authMiddleware = require("../middleware/auth-middleware");
const userRouter=express.Router();

// userRouter.get("/",home);

// userRouter.get("/getUser",getUser);
userRouter.post("/register",validateUserRegistration,runValidation ,register);
userRouter.post("/login",validateUserLogin,runValidation, login);
userRouter.get("/user",authMiddleware,user);
module.exports=userRouter