const express = require('express')
const router = express.Router()
const {addLecture}=require('../Controllers/lectureController') 
router.route('/addLecture').post(addLecture)
module.exports = router