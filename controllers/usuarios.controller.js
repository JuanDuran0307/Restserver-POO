const Usuario = require("../models/usuario.js");
const bcryptjs = require('bcryptjs');


const getUsuarios = (req,res)=>{
    res.json({

        "message":"hello xd with poo"
    })
};
    
const deleteUsuarios = (req,res)=>{
    res.json({
        "message":"delete api"
    })

};

const insertUsuario = async (req,res)=>{
 

    const {nombre,email,password,rol} = req.body; 
    const usuario = new Usuario({nombre,email,password,rol});
    await usuario.save();
    /* verfificar si el email ya existe */
    const existeEmail = await Usuario.findOne({email});
        if(existeEmail){
            return res.status(400).json({
                msg: "Email is already registered"
            })
        };

    /* eNCRIPTAR NUESTRAS CONTRASEÑAS */
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);


    res.json({
        "message":"post api asdasd",
        usuario
    })
    
};

const updateUsuarios = (req,res)=>{
    res.json({
        "message":"patch api"
    })
    
};

module.exports = {
    getUsuarios,
    deleteUsuarios,
    insertUsuario,
    updateUsuarios
}