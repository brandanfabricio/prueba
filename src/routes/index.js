const express = require('express');
const cors = require('cors');
//const helmet = require('helmet');
//const compression = require('compression');
module.exports = function({HomeRoutes,IdeasRoutes}){
        const router = express.Router();
        const routerMidel = express.Router();


        routerMidel
        .use(express.json())
        .use(cors())
       // .use(helmet())

        //.use(compression());

        routerMidel.use('/home',HomeRoutes);
        routerMidel.use('/ideas',IdeasRoutes);
        
        router.use('/v1/api',routerMidel);



        return router;
}