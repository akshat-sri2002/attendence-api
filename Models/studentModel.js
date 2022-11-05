const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    email:{
        type:String
    },
    stucentName:{
        type:String,
        required:true
    },
    branch:{
        type:String
    }
})
module.exports = new mongoose.model("Student",studentSchema)