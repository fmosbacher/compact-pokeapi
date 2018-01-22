var mongoose = require('mongoose')
var multer = require('multer')
var fs = require('fs')
var Pokemon = require('../data/pokemon.model.js')

module.exports.pokemonDeleteAll = function(req, res) {
	Pokemon.remove(function(err, deleteInfo) {
		if (err) {
			res
				.status(500)
				.json(err)
			return
		}
		res
			.status(200)
			.json({ 'message': 'Cleaned!', deleteInfo })
	})
}

module.exports.pokemonGetAll = function(req, res) {
	Pokemon.count(function(err, count) {
		if (err) {
			res
				.status(500)
				.json(err)
			return
		}
		Pokemon
			.find({})
			.select('-_id')
			.sort([['id', 'asc']])
			.exec(function(err, pokemons) {
				if (err) {
					res
						.status(500)
						.json(err)
					return
				}
				res
					.status(200)
					.json({
						'total': count,
						'pokemons': pokemons
					})
			})
	})
}

module.exports.pokemonAdd = function(req, res) {
	Pokemon.count(function(err, count) {
		if (err) {
			res
				.status(500)
				.json(err)
			return
		}			
		Pokemon.create({
			'id': count,
			'name': req.body.name,
			'image': {
				'data': req.file ? fs.readFileSync(req.file.path) : undefined,
				'contentType': 'image/png'
			},
			'stats': {
				'speed': req.body.speed,
				'specialDefense': req.body.specialDefense,
				'specialAttack': req.body.specialAttack,
				'defense': req.body.defense,
				'attack': req.body.attack,
				'hp': req.body.hp
			},
			'baseExperience': req.body.baseExperience,
			'weight': req.body.weight,
			'abilities': req.body.abilities,
			'moves': req.body.moves
		}, function(err, newPokemon) {
			if (err) {
				res
					.status(500)
					.json(err)
				return
			}
			res
				.status(201)
				.json(newPokemon)
			console.log('Pokemon created successfully')
		})
	})
}

module.exports.pokemonGetOne = function(req, res) {
	var pokemonId = req.params.id

	Pokemon
		.findOne({ id: pokemonId })
		.select('-_id')
		.exec(function(err, pokemon) {
		if (err) {
			res
				.status(500)
				.json(err)
			return
		} else if (pokemon == null) {
			res
				.status(404)
				.json({ 'message': 'Pokemon ID not found: ' + pokemonId })
			return
		}
		res
			.status(200)
			.json(pokemon)
	})
}

module.exports.pokemonUpdate = function(req, res) {
	var pokemonId = req.params.id
	
	Pokemon.findOne({ id: pokemonId }, function(err, pokemon) {
		if (err) {
			res
				.status(500)
				.json(err)
			return
		} else if (pokemon == null) {
			res
				.status(404)
				.json({ 'message': 'Pokemon ID not found' })
			return
		}

		pokemon.name = req.body.name || pokemon.name
		pokemon.image = {
			'data': req.file ? fs.readFileSync(req.file.path) : undefined,
			'contentType': 'image/png'
		}
		pokemon.stats = {
			'speed': req.body.speed || pokemon.stats.speed,
			'specialDefense': req.body.specialDefense || pokemon.stats.specialDefense,
			'specialAttack': req.body.specialAttack || pokemon.stats.specialAttack,
			'defense': req.body.defense || pokemon.stats.defense,
			'attack': req.body.attack || pokemon.stats.attack,
			'hp': req.body.hp || pokemon.stats.hp
		}
		pokemon.baseExperience = req.body.baseExperience || pokemon.baseExperience
		pokemon.weight = req.body.weight || pokemon.weight
		pokemon.abilities = req.body.abilities || pokemon.abilities
		pokemon.moves = req.body.moves || pokemon.moves
		
		pokemon.save(function(err) {
			if (err) {
				res
					.status(500)
					.json(err)
				return
			}
			res
				.status(200)
				.json({ 'message': 'Pokemon updated' , pokemon })
		})
	})
}

module.exports.pokemonDelete = function(req, res) {
	var pokemonId = req.params.id
	
	Pokemon.remove({ id: pokemonId }, function(err, deleteInfo) {
		if (err) {
			res
				.status(500)
				.json(err)
			return
		}
		if (deleteInfo.n > 0) {
			res
				.status(200)
				.json({ 'message': 'Pokemon deleted: ' + deleteInfo })
		} else {
			res
				.status(200)
				.json({ 'message': 'No pokemon found for delete ' + deleteInfo })
		}
		
	})
}
