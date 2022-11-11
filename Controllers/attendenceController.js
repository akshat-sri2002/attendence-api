const Attendance = require('../Models/attendenceModel')
const Lecture = require('../Models/lectureModel')
const Enroll = require('../Models/enrollModel')
const date = new Date().setUTCHours(0,0,0,0)
const markAttendance = async(req,res)=>{
    try{
        const studentID = req.body.studentID
        const subjectID = req.body.subjectID
        const isEnrolled = await Enroll.find({studentID,subjectID})
        console.log(isEnrolled)
        if(!isEnrolled.length) return res.status(400).json({
            message:"student not enrolled"
        })
        const isLectureMarked = await Lecture.find({subjectID,date})
        if(!isLectureMarked.length) return res.status(400).json({
            message:"mark lecture first"
        })
        const isAttendenceMarked = await Attendance.find({studentID,subjectID,date})
        if(isAttendenceMarked.length) return res.status(409).json({
            message:"attendance already marked",
            isAttendenceMarked
        })
        const attendance = await Attendance.create({studentID,subjectID,date})
        res.status(200).json({
            message:"attendance marked",
            attendance
        })
        
    }
    catch(e){
        console.log(e)
    }
} 
module.exports ={markAttendance}