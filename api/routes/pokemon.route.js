var express = require('express')
var multer = require('multer')
var pokemonCtrl = require('../controllers/pokemon.controller.js')
var userCtrl = require('../controllers/user.controller.js')

var router = express.Router()
var upload = multer({ dest: './public/uploads' })

router
	.route('/')
	.get(pokemonCtrl.pokemonGetAll)
	.post(userCtrl.userAuthenticate, upload.single('image'), pokemonCtrl.pokemonAdd)
	.delete(userCtrl.userAuthenticate, pokemonCtrl.pokemonDeleteAll)

router
	.route('/:id')
	.get(pokemonCtrl.pokemonGetOne)
	.put(userCtrl.userAuthenticate, upload.single('image'), pokemonCtrl.pokemonUpdate)
	.patch(userCtrl.userAuthenticate, upload.single('image'), pokemonCtrl.pokemonUpdate)
	.delete(userCtrl.userAuthenticate, pokemonCtrl.pokemonDelete)

module.exports = router