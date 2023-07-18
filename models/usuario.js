const {Schema, model} = require("mongoose");

const UsuarioSchema = Schema({
    nombre:{
        type:String,
        required:[true, "name is required"]
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "password is required"]
    },
    imagen:{
        type:String,
        
    },
    rol:{
        type:String,
        required:true,
        default:'USER'
        /* enum:["ADMIN","USER"] */
    },
    estado:{
        type:Boolean,
        default:true
    },
    googleSignIn:{
        type:Boolean,
        default:true
    },
})

module.exports=model('Usuario',UsuarioSchema);