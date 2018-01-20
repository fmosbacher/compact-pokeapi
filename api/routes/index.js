var express = require('express')

var router = express.Router()

router
	.route('/')
	.all(function(req, res) {
		res
			.status(200)
			.json({ 'message': 'API index page' })
	})

module.exports = router