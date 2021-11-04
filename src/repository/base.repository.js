
class BaseRepositorio {
    constructor(model){
        this.model = model;
    }
    async getid(){    
       
            return  await this.model.find();

           
    }
    async get(id){
        return await this.model.findById();
    }
    async post(entity){
        return await this.model.create(entity);
    }

    async update(id,entity){
        return await  this.model.findByIdAndUpdate(id,entity,{new:true});
    }

    async delete (id){
        await this.model.findByIdAndDelete(id)
        return true
    }
}


module.exports = BaseRepositorio;