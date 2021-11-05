let _ideasService = null;

class  IdeasControllers{
    constructor({ IdeasService}){
        _ideasService = IdeasService
    }
    async get(req,res){
        return  res.send(await  _ideasService.get());
    }


    async getid(req,res){
        const {id} = req.params;
        return res.send(await _ideasService.getid(id) );
    }


    async post(req,res){
        const {body} = req;
        const crearIdea = await _ideasService.post(body);
        return res.status(201).send(crearIdea)
    }
    async update(req,res){
        const {body} = req;
        const {id} = req.params;
        const actualizar = await _ideasService.update(id,body)
        return res.send(actualizar)
    }
    async delete(req,res){
        const {id} = req.params;
        const borrar = await _ideasService.delete(id)
        return res.send(borrar)
    }

}

module.exports = IdeasControllers;
