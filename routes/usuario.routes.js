const {Router} = require('express');
const {getUsuarios,insertUsuario,deleteUsuarios,updateUsuarios} = require('../controllers/usuarios.controller.js');
const router = Router();

router.get("/", getUsuarios)
router.post("/", insertUsuario);
router.delete("/", deleteUsuarios);
router.patch("/", updateUsuarios);

module.exports = router;