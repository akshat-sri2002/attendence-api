const express = require('express')
const router = express.Router()
const {markAttendance} = require('../Controllers/attendenceController')
router.route('/markAttendance').post(markAttendance)
module.exports = router