const BaseRepositorio = require('./base.repository');

let _ideas = null;

class IdeaRepositorio extends BaseRepositorio{
    constructor({Ideas}){
        super(Ideas);
        _ideas = Ideas;
    }
    
}

module.exports = IdeaRepositorio;