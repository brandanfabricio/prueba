const mongoose = require('mongoose')
const {Schema}= mongoose;

const IdeasSchema = new Schema({
    nombre:{type: String,required:true},
    descripcion:{type:String}
})

module.exports = mongoose.model('ideas',IdeasSchema);


