const Subject = require('../Models/subjectModel')

const addSubject = async(req, res)=>{
    try{
        const isExists =await Subject.find({subjectCode:req.body.subjectCode})
        if(isExists.length){
           return res.status(409).json({
                message:"subject already exists",
                isExists 
           })
        }
        const subject = await Subject.create(req.body)
        res.status(200).json({
            message:"subject added Successfully",
            subject
        }
        )
    }
    catch(e){
        console.log(e)
    }
}
const getAllSubject = async(req,res)=>{
    try{
        const subject = await Subject.find()
        res.status(200).json({
            subject
        })
    }
    catch(e){
        console.log(e)
    }
    
}
module.exports = {addSubject,getAllSubject}