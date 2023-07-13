const express = require('express');
const cors = require('cors');
class Server {
    constructor(){
        this.app = express();
        
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios";
        /* middlewares */
        this.middlewares();
        /* Routing */
        this.routes();

    }
    middlewares(){
        /* cors */
        this.app.use(cors());
        /* Public Directory */
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuario.routes.js'));
    }

    listenn(){
        this.app.listen(this.port, ()=>{
            console.log(`server running on port : ${this.port}`);
        })
    }
}
module.exports = Server;