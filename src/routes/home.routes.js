const {Router} = require('express')

module.exports = function ({HomeControllers}){
    const router = Router();
     router.get('/',HomeControllers.index)

        return router;
        
}