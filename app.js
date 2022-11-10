const express = require ( 'express')
const app = express()
const bodyParser = require('body-parser')
app.use(express.json({
    limit:"50mb",
}))
app.use(bodyParser.urlencoded({
    limit:"50mb",
    extended:true
}))
const student = require('./Routes/studentRoute')
const subject = require('./Routes/subjectRoute')
const enroll = require('./Routes/enrollRoute')
const lecture = require('./Routes/lectureRoute')
app.use('/api/v1/subject',subject)
app.use('/api/v1/student',student)
app.use('/api/v1/enroll',enroll)
app.use('/api/v1/lecture',lecture)
module.exports = app