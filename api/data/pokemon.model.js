var mongoose = require('mongoose')
mongoose.Promise = global.Promise

var pokemonSchema = new mongoose.Schema({
	id: Number,
	name: String,
	image: {
		data: Buffer,
		contentType: String
	},
	stats: {
		speed: Number,
		specialDefense: Number,
		specialAttack: Number,
		defense: Number,
		attack: Number,
		hp: Number
	},
	baseExperience: Number,
	weight: Number,
	abilities: [String],
	moves: [String]
}, { versionKey: false })

module.exports = mongoose.model('Pokemon', pokemonSchema)

