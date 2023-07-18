const {Router} = require('express');
const {check} = require('express-validator');
const {getUsuarios,insertUsuario,deleteUsuarios,updateUsuarios} = require('../controllers/usuarios.controller.js');
const { validateDocuments } = require('../middlewares/validate.documents.js');
const router = Router();
const Role = require('../models/role.js')

router.get("/", getUsuarios)
router.post("/",[
    check('nombre', 'Nombre nomes valido').not().isEmpty(),
    check('password', 'Password debe ser minimo de 6 letras').isLength({min :6}),
    check('email', 'El correo no es valido').isEmail(),
 /*    check('rol','No es un rol valido').isIn(['ADMIN','USER']), */
    check('rol').custom(async(rol= '')=>{
        const existeRole = await Role.findOne({rol});
        if(!existeRole){
            throw new Error(`El rol ${rol} no esta registado en la base de datos`);
        }
    }),
    validateDocuments
], insertUsuario);
router.delete("/", deleteUsuarios);
router.patch("/", updateUsuarios);

module.exports = router;