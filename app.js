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
app.use('/api/v1/subject',subject)
module.exports = app