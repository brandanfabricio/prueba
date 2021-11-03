const{createContainer,asClass,asFunction,asValue}=require('awilix');



// configuraciones 
const config = require('../config')

//servidor
const Servidor = require('./servidor')

//servicios 
const {HomeService,IdeasService} = require('../services')
 
//controllers
const {HomeControllers,IdeasControllers} = require('../controllers')
//rutas 
const {HomeRoutes,IdeasRoutes} = require('../routes/index.routes')
const Rutas = require('../routes')
//modelos 
const {Ideas} = require('../models')

//repositorio
const {IdeasRepositorio} = require('../repository')












const contenedor = createContainer();
contenedor
    //configuracion de servidor
.register({

    Servidor: asClass(Servidor).singleton(),
    Rutas:asFunction(Rutas).singleton(),

    Config : asValue(config)

})
        //servicio
.register({
    HomeService: asClass(HomeService).singleton(),
    IdeasService: asClass(IdeasService).singleton()
})
    //controladores
.register({
    HomeControllers : asClass(HomeControllers.bind(HomeControllers)).singleton(),
   IdeasControllers: asClass(IdeasControllers.bind(IdeasControllers)).singleton()
})
    //rutas
.register({
    HomeRoutes : asFunction(HomeRoutes).singleton(),
    IdeasRoutes: asFunction(IdeasRoutes).singleton()
})
    //modelos
.register({
    Ideas:asValue(Ideas)
})
    //repositorio
.register({
    IdeasRepositorio : asClass(IdeasRepositorio).singleton()
})





module.exports = contenedor;