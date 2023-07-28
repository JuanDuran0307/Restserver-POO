const {response} = require("express");
const Usuario = require ("../models/usuario.js");
const bcryptjs = require('bcryptjs');
const { generateJWT } = require("../helpers/generate.JWT.js");


const login = async (req,res=response)=>{
    const {email,password} = req.body;
    try {
        /* verificar que el correo electronico exista */
        const usuario = await Usuario.findOne({email});
        if(!usuario){
            return res.status(400).json({msg:"Usuario no existe o no es correcto"});
        }
   
        /* usuario tenga un estado de activo */
        if(!usuario.estado){
            return res.status(400).json({msg:"El estado es inactivo"});
        }
        /* verficar la contraseña */
        const validatePassword = bcryptjs.compareSync(password, usuario.password);
        if(!validatePassword){
            return res.status(400).json({msg:"la contraseña es incorrecta"});
        }
        /* validacion de JSON WEB TOKEN */
        const Token = await generateJWT(usuario.id) 
        
        res.json({
            usuario,
            Token
        })
        
    } catch (error) {
        console.log(error);
        return res.json({
            msg:"Contatcte al servicio tecnico"
        });
    }

}

module.exports = {
    login
}

function parseJwt(token){
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('_','/');
    return JSON.parse(window.atob(base64));
}