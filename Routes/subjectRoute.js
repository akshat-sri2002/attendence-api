const express = require('express')
const router = express.Router()
const {addSubject, getAllSubject} = require('../Controllers/subjectController')
router.route('/addSubject').post(addSubject)
router.route('/getAllSubject').get(getAllSubject)
module.exports = router