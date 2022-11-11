const Enroll = require('../Models/enrollModel')
const Student = require('../Models/studentModel')
const Subject = require('../Models/subjectModel')

const enrollStudent = async(req, res)=>{
    try{
        // console.log(req.body)
        const studentID = req.body.studentID
        // console.log(studentID)
        const subjectID = req.body.subjectID
        isExistStudent =await Student.findById(studentID)
        isExistSubject =await Subject.findById(subjectID)
        if(!isExistStudent) return res.status(400).json({
            message:"invalid student"
        })
        if(!isExistSubject) return res.status(400).json({
            message:"invalid subject"
        })
        const isAlreadyEnrolled =await Enroll.find(req.body)
        if(isAlreadyEnrolled.length) return res.status(409).json({
            message:"student already registered in the subject"
        })
        const enrollment =await Enroll.create(req.body)
        res.status(200).json({
            message:"student registered successfully",
            enrollment
        })
    }
    catch(e){
        console.log(e)
    }
}
const getAllStudentBySubjectId = async (req,res)=>{
    try{
        const student =await Enroll.find({subjectID:req.body.subjectID}).populate('studentID')
        res.json({
            student
        })
    }
    catch(e){
        console.log(e)
    }
}
const getAllSubjectByStudentId = async (req, res)=>{
    try{
        const subject = await Enroll.find({studentID:req.body.studentID}).populate('subjectID')
        res.json({
            subject
        })
    }
    catch(e){
        console.log(e)
    }
}
module.exports = {enrollStudent,getAllStudentBySubjectId,getAllSubjectByStudentId}