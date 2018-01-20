var express = require('express')
var sixBestCtrl = require('../controllers/six_best.controller.js')

var router = express.Router()

router
	.route('/:stat')
	.get(sixBestCtrl.sixBestFind)

module.exports = router