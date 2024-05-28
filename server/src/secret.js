require("dotenv").config();
const serverPort=process.env.SERVER_PORT||5000;
const mongodbURL=process.env.MONGODB_ATLAS_URL||"mongodb://localhost:27017/myProject";
const defaultImagePath=process.env.DEFAULT_IMAGE_PATH || 'public/images/users/hero.png'
const secreteKey=process.env.JWT_ACTIVATION_KEY
module.exports={serverPort,mongodbURL,defaultImagePath,secreteKey}