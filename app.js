var express = require('express')
var bodyParser = require('body-parser')
var db = require('./api/data/db.js')
var indexRoute = require('./api/routes/index.js')
var pokemonRoutes = require('./api/routes/pokemon.route.js')
var sixBestRoutes = require('./api/routes/six_best.route.js')

// Connect to mongoDB
db.establishDbConnection()

var app = express()

app.set('port', 3000)

// Parse requests body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.use('/', indexRoute)
app.use('/api/pokemon', pokemonRoutes)
app.use('/api/six-best', sixBestRoutes)

var server = app.listen(app.get('port'), function() {
    var port = server.address().port
    console.log('Server listening on port ' + port)
})