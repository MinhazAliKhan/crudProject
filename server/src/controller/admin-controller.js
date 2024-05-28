
const User = require("../model/userModel");


const getAllUser=async(req,res)=>{
  try {
    const users=await User.find({},{password:0});
    // console.log(users);
    if(!users||users.length===0){
        return res.status(404).json({
            msg:"No user in the database"
        })
    }
    return res.status(200).json(users)
  } catch (error) {
    
    next(error)
  }
};
const deleteUserById=async(req,res)=>{
  try {
    const id=req.params.id;
    await User.deleteOne({_id:id});
    return res.status(200).json({message:"user deleted successfully"}) 

    }
    
  catch (error) {
    
    next(error)
  }
  };

  const getUserById=async(req,res)=>{
    try {
      const id=req.params.id;
      const data=await User.findOne({_id:id}, {password:0});
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  const updateUserById=async(req,res)=>{
      try {
        const id=req.params.id;
        const updatedUserData=req.body;
        const updateUser=await User.updateOne({_id:id},{
          $set:updatedUserData,
        });
        return res.status(200).json(updateUser);
      } catch (error) {
        res.status(404).json("Not good")
      }
  }




module.exports= {getAllUser,deleteUserById,getUserById,updateUserById}