const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config.js');

class Server {
    constructor(){
        this.app = express();
        
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios";
        this.authPath = "/api/auth";
        /* CONECTAR BASE DE DATOS MONGODB */
        this.connectDB();
        /* middlewares */
        this.middlewares();
        /* Routing */
        this.routes();

    }

    async connectDB(){
        await dbConnection();
    }

    middlewares(){
        /* cors */
        this.app.use(cors());
        /* LEER Y PARSEAR JSON */
        this.app.use(express.json());
        /* Public Directory */
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.authPath, require('../routes/auth.routes.js'));
        this.app.use(this.usuariosPath, require('../routes/usuario.routes.js'));
    }

    listenn(){
        this.app.listen(this.port, ()=>{
            console.log(`server running on port : ${this.port}`);
        })
    }
}
module.exports = Server;