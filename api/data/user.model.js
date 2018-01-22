var mongoose = require('mongoose')
mongoose.Promise = global.Promise

var userSchema = new mongoose.Schema({
	name: String,
	username: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	}
}, { versionKey: false })

module.exports = mongoose.model('User', userSchema)