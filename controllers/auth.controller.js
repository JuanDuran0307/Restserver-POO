const {response} = require("express");
const Usuario = require ("../models/usuario.js");
const bcryptjs = require('bcryptjs');


const login = async (req,res=response)=>{
    const {email,password} = req.body;
    try {
        /* verificar que el correo electronico exista */
        const usuario = await Usuario.findOne({email});
        if(!usuario){
            return res.status(400).json({msg:"Usuario no existe o no es correcto"});
        }
        if(!usuario.estado){
            return res.status(400).json({msg:"El estado es inactivo"});
        }
        /* usuario tenga un estado de activo */


        /* verficar la contraseña */
        const validatePassword = bcryptjs.compareSync(password, usuario.password);
        if(!validatePassword){
            return res.status(400).json({msg:"la contraseña es incorrecta"});
        }
        
        res.json({
            msg: "ok"
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