var express = require('express')
var multer = require('multer')
var pokemonCtrl = require('../controllers/pokemon.controller.js')

var router = express.Router()
var upload = multer({ dest: './api/public/uploads' })

router
	.route('/')
	.get(pokemonCtrl.pokemonGetAll)
	.post(upload.single('image'), pokemonCtrl.pokemonAdd)
	.delete(pokemonCtrl.pokemonDeleteAll)

router
	.route('/:id')
	.get(pokemonCtrl.pokemonGetOne)
	.put(upload.single('image'), pokemonCtrl.pokemonUpdate)
	.patch(upload.single('image'), pokemonCtrl.pokemonUpdate)
	.delete(pokemonCtrl.pokemonDelete)

module.exports = router