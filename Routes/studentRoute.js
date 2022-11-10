const express = require('express')
const router = express.Router()
const {registerStudent,getAllStudent} = require('../Controllers/studentController')
router.route('/registerStudent').post(registerStudent)
router.route('/getAllStudent').get(getAllStudent)
module.exports= router