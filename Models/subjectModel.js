const mongoose = require ('mongoose')
const subjectSchema = new mongoose.Schema({
    subjectName:{
        type:String,
        required:true
    },
    subjectCode:{
        type:String,
        unique:true,
        required:true
    }
})
module.exports = new mongoose.model("Subject",subjectSchema)