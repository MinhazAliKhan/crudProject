const {getAllUser,deleteUserById,getUserById, updateUserById} = require("../controller/admin-controller");

const express=require("express");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const adminrouter=express.Router();


adminrouter.route("/users").get(authMiddleware,adminMiddleware, getAllUser);
adminrouter.route("/users/delete/:id").delete(authMiddleware,adminMiddleware, deleteUserById);
adminrouter.route("/users/:id").get(authMiddleware,adminMiddleware,getUserById);
adminrouter.route("/users/update/:id").patch(authMiddleware,adminMiddleware,updateUserById);
module.exports=adminrouter