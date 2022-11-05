const mongoose = require('mongoose')
const attendenceSchema = new mongoose.Schema({
    studentID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student"
    },
    subjectID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject"
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
module.exports = new mongoose.model("Attendence",attendenceSchema)