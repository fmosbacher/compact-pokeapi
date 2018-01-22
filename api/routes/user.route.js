var express = require('express')
var userCtrl = require('../controllers/user.controller.js')

var router = express.Router()

router
	.route(userCtrl.userAuthenticate, '/register')
	.post(userCtrl.userRegister)

router
	.route('/login')
	.post(userCtrl.userLogin)

module.exports = router
