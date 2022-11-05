const mongoose = require('mongoose')
const enrollSchema = new mongoose.Schema({
    studentID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student"
    },
    subjectID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject"
    }
})
module.exports = new mongoose.model("Enroll",enrollSchema)