const {Router} = require('express')

module.exports = function({IdeasControllers}){
const router = Router();

router.get('/',IdeasControllers.get)
router.post('/',IdeasControllers.post)
router.patch('/:id',IdeasControllers.update)
router.delete('/:id',IdeasControllers.delete)


return router}