var mongoose = require('mongoose')
var User = require('../data/user.model.js')
var bcrypt = require('bcrypt-nodejs')
var jwt = require('jsonwebtoken')

module.exports.userRegister = function(req, res) {
	User.create({
		name: req.body.name || undefined,
		username: req.body.username,
		password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
	}, function(err, user) {
		if (err) {
			res
				.status(500)
				.json(err)
		} else {
			res
				.status(201)
				.json(user)
		}
	})
}

module.exports.userLogin = function(req, res) {
	User
		.findOne({ username: req.body.username })
		.exec(function(err, user) {
			console.log('User found: ' + user)
			if (err) {
				res
					.status(500)
					.json(err)
			} else if (user == undefined) {
				res
					.status(400)
					.json({ 'message': 'user not found' })		
			} else {
				if (bcrypt.compareSync(req.body.password, user.password)) {
					var token = jwt.sign({ username: req.body.username }, 'privatekey', { expiresIn: 3600 })
					res
						.status(200)
						.json({ 'success': true, 'token': token })
				} else {
					res
						.status(401)
						.json('Unauthorized')
				}
			}
		})
}

module.exports.userAuthenticate = function(req, res, next) {
	var header = req.headers.authorization

	if (header) {
		var token = req.headers.authorization.split(' ')[1]
		jwt.verify(token, 'privatekey', function(err, decoded) {
			if (err) {
				res
					.status(401)
					.json('Unauthorized')
			} else {
				req.user = decoded.username
				next()
			}
		})
	} else {
		res
			.status(403)
			.json('No token provided')
	}
}