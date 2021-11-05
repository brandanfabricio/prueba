class BaseService{
    constructor(repsositorio){
        this.repsositorio = repsositorio;
    }

    async get(){
        return await this.repsositorio.get();
    }

    async getid(id){
        return await this.repsositorio.getid(id);
    }

    async post(entity){
        return await this.repsositorio.post(entity)
    }
    async update(id,entity){
       if (!id) {
            const eror = new Error();
            eror.status = 400;
            error.message = 'id ni encontrado';
            throw error;
        }
        return await this.repsositorio.update(id,entity)

    }

    async delete(id){
        if(!id){
            const error = new Error();
            error.status = 400;
            error.message = 'id no encontrado ';
            throw error;
        }
        return await this.repsositorio.delete(id);
    }
}

module.exports = BaseService;