var mongoose = require('mongoose')
var dbUrl = 'mongodb://localhost:27017/compact-pokeapi'

module.exports.establishDbConnection = function() {
	mongoose.connect(dbUrl, {
		useMongoClient: true
	})
	
	mongoose.connection.on('connected', function() {
		console.log('Mongoose connected to ' + dbUrl)
	})
	
	mongoose.connection.on('disconnected', function() {
		console.log('Mongoose disconnected')
	})
	
	mongoose.connection.on('error', function(err) {
		console.log('Mongoose connection error ' + err)
	})
}