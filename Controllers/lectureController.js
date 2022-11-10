const Lecture = require('../Models/lectureModel')
const date = new Date().setUTCHours(0,0,0,0)
const addLecture = async(req,res)=>{
    try{
        const subjectID = req.body.subjectID
        const check = await Lecture.find({subjectID,date})
        if(check.length){
            return res.status(409).json({
                message:"lecture already marked"
            })
        }
        const lecture = await Lecture.create({
            subjectID,date
        })
        res.status(200).json({
            message:"lecture added",
            lecture
        })
    }
    catch(e){
        console.log(e)
    }
}
module.exports = {addLecture}