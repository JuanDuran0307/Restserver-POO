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

const insertUsuario = (req,res)=>{
    const {nombre, gustos} = req.body; 
    res.json({
        "message":"post api asdasd",
        nombre,
        gustos
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