const mongoose = require('mongoose')
const {Schema}= mongoose;

const IdeasSchema = new Schema({
    nombre:{type: String,required:true},
    descripcion:{type:String}
})



IdeasSchema.methods.toJSON = function() {
    const { __v, ...data  } = this.toObject();
    return data;
}

module.exports = mongoose.model('ideas',IdeasSchema);


