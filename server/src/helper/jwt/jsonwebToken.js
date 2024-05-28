const jwt = require('jsonwebtoken');

const createJsonWebToken=(payload,secreteKey,expiresIn)=>{
    const token = jwt.sign(payload, secreteKey,{expiresIn});
    return token;
}
module.exports=createJsonWebToken
