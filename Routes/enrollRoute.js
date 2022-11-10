const express = require('express')
const router = express.Router()
const {enrollStudent} = require('../Controllers/enrollController')
router.route('/enrollstudent').post(enrollStudent)
module.exports = router