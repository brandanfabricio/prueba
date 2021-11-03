
const express = require('express');


let _express = null
let _config = null;

class Server {
    constructor({Config ,Rutas}){
        _config = Config;
        _express = express().use(Rutas).use(express.static('public'))
    }
    start(){
        return new Promise(resolve => {
            _express.listen(_config.PORT,()=>{
                    console.log(`aplicacion ${_config. NOMBRE_APLICACION}  corriendo en el puerto  ${_config.PORT}`);

                    resolve();

            })


        })
    }
}


module.exports = Server