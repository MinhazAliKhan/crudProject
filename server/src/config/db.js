const mongoose=require("mongoose");
const { mongodbURL } = require("../secret");


const connectDatabase=async(option={})=>{
 try {
 await mongoose.connect(mongodbURL,option);
 console.log("database conection successfully");
 mongoose.connection.on("error",(error)=>{
    console.error("database connection error",error)
 })
 } catch (error) {
    console.error("Database connection error",error.toString());
 }

}
module.exports=connectDatabase
