const {Schema,model}=require("mongoose");
const bcrypt = require("bcryptjs");
const { defaultImagePath } = require("../secret");

const userSchema= new Schema({
    username:{
        type:String,
        required:[true,"User name is required"],
        trim:true,
        maxlength:[31,"maximum name length is 31 character"],
        minlength:[3,"minimum name length is 3 character"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        lowercase:true,
        trim:true,
        // unique:true,
        // validate:{
        //     validator:(v)=>{
        //         return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
        //     },
        //     message:"enter a valid email"
        // }
    },
    password:{
        type:String,
        required:[true,"User password is required"],
        minlength:[6,"minimum password length is minimum 6 character"],
        set: (v)=> bcrypt.hashSync(v, bcrypt.genSaltSync(10))
    },
    image:{
     type:String, 
     default:defaultImagePath  
    },
    address:{
        type:String,
        required:[true,"User address is required"],
    },
    phone:{
        type:String,
        required:[true,"User phone is required"],
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isBanned:{
        type:Boolean,
        default:false
    },
    

},{timestamps:true});

const User=model ("Users",userSchema);
module.exports=User