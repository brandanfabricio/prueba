const BaseService = require('./base.service');
let _ideasRepositorio = null;

class IdeasService extends BaseService{
        constructor({IdeasRepositorio}){
            super(IdeasRepositorio);
            _ideasRepositorio  = IdeasRepositorio;
        }


}
module.exports = IdeasService