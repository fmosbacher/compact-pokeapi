var mongoose = require('mongoose')
var Pokemon = require('../data/pokemon.model.js')

var pokemonSumAttributes = function(pokemons) {
	var attributesSum = {
		'stats': {
			'speed': 0,
			'specialDefense': 0,
			'specialAttack': 0,
			'defense': 0,
			'attack': 0,
			'hp': 0
		},
		'weight': 0,
		'baseExperience': 0
	}
	
	pokemons.forEach(function(pokemon) {
		attributesSum.stats.speed += pokemon.stats.speed || 0
		attributesSum.stats.specialDefense += pokemon.stats.specialDefense || 0
		attributesSum.stats.specialAttack += pokemon.stats.specialAttack || 0
		attributesSum.stats.defense += pokemon.stats.defense || 0
		attributesSum.stats.attack += pokemon.stats.attack || 0
		attributesSum.stats.hp += pokemon.stats.hp || 0
	})

	return attributesSum
}

module.exports.sixBestFind = function(req, res) {
	var availableStats = {
		'speed': 'stats.speed',
		'special-defense': 'stats.specialDefense',
		'special-attack': 'stats.specialAttack',
		'defense': 'stats.defense',
		'attack': 'stats.attack',
		'hp': 'stats.hp'
	}
	
	if (availableStats[req.params.stat] == undefined) {
		res
			.status(404)
			.json({ 'message': 'Statistic not found ' + req.params.stat })
		return
	}

	var stat = availableStats[req.params.stat]

	Pokemon
		.find({})
		.sort([[stat, 'desc']])
		.limit(6)
		.exec(function(err, pokemons) {
			if (err) {
				res
					.status(500)
					.json(err)
				return
			}

			var attributesSum = pokemonSumAttributes(pokemons)

			res
				.status(200)
				.json({
					'attributesSum': attributesSum,
					'sixBest': pokemons
				})
		})
}