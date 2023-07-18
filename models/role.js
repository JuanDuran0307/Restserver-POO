const {Schema, model} = require ('mongoose');

const rolesSchema = Schema({
    rol:{
        type:String,
        required:[true, "el rol es obligatorio"]
    }
})

module.exports = model('Role', rolesSchema);