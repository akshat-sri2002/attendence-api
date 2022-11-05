const mongoose = require("mongoose")
const connection = ()=>{
    mongoose.connect(process.env.MONGO_URI).then((res)=>{
        console.log('database connected')
    }).catch((err)=>{
        console.log('database not connected')
        console.log(err)
    })
}

module.exports = connection