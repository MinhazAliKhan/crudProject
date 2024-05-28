const {Schema,model}=require("mongoose");

const contactSchema= new Schema({
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
    
    
   
    message:{
        type:String,
        required:[true,"User message is required"],
    },
    

},{timestamps:true});

const Contact=model ("Contact",contactSchema);
module.exports=Contact