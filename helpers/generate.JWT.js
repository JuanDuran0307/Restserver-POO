const jwt = require ("jsonwebtoken");

const generateJWT = async(uid ="")=>{
    return new Promise((resolve,reject)=>{
        const payload = {uid};
        jwt.sign(payload,process.env.SECRET_OR_PRIVATE_KEY,{
            expiresIn: "4h"
        },(err,token)=>{
            if(err){
                console.log(err);
                reject("no se pudo generar el json web token")
            }else{
                resolve(token)
            }
        });
    })
}

module.exports= {
    generateJWT
}