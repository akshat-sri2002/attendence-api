const express = require('express')
const router = express.Router()
const {addSubject, test} = require('../Controllers/subjectController')
router.route('/addSubject').post(addSubject)
router.route('/test').get(test)
module.exports = router