const express = require('express')
const router = express.Router()
const {enrollStudent, getAllStudentBySubjectId, getAllSubjectByStudentId} = require('../Controllers/enrollController')
router.route('/enrollstudent').post(enrollStudent)
router.route('/getAllStudentBySubjectId').post(getAllStudentBySubjectId)
router.route('/getAllSubjectByStudentId').post(getAllSubjectByStudentId)
module.exports = router