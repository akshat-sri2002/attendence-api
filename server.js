const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connect = require('./Config/database')
const app = require('./app')
dotenv.config({path:'./config/.env'})
connect()
app.listen(process.env.PORT,()=>{
    console.log('connected successfully at port',process.env.PORT)
})