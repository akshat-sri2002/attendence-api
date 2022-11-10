const Student = require('../Models/studentModel')
const registerStudent= async(req,res)=>{
    try{
        const isExists = await Student.find({email:req.body.email})
        if(isExists.length){
            return res.status(409).json({
                message:"student already exists",
                isExists
            })
        }
        const student = await Student.create(req.body)
        res.status(409).json({
            message:"student registered",
            student
        })
    }
    catch(e){
        console.log(e)
    }
}
const getAllStudent = async(req,res)=>{
    try{
        const student = await Student.find()
        res.status(200).json({
            student
        })
    }
    catch(e){

    }
}
module.exports ={registerStudent,getAllStudent}