const express=require("express");
const contact = require("../controller/contact-controller");
const validateContact = require("../validators/contact");
const runValidation = require("../validators");




const contactRouter=express.Router();

contactRouter.post("/contact", contact);


module.exports=contactRouter