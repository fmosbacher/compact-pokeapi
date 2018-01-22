# Compact PokeAPI

Compact Pokemon REST API to store basic informations based on [pokeapi](https://pokeapi.co/)

Access the API here: [https://compact-pokeapi.herokuapp.com](https://compact-pokeapi.herokuapp.com)

## Open Endpoints

Open endpoints require no authentication

### User

* [Login](docs/login.md): `POST /api/user/login`

### Pokemon

* [Show all pokemons](docs/pokemonGetAll.md): `GET /api/pokemon`
* [Show specific pokemon](docs/pokemonGetOne.md): `GET /api/pokemon/{id}`
* [Show six best pokemons](docs/sixBestGet.md): `GET /api/six-best/{attr}`

## Endpoints that require authentication

Each endpoint manipulates or displays information related to the user whose Token is provided with the request

### User

* [Register](docs/register.md): `POST /api/user/register`

### Pokemon

* [Add new pokemon](docs/pokemonPost.md): `POST /api/pokemon`
* [Remove all pokemons](docs/pokemonDeleteAll.md): `DELETE /api/pokemon`
* [Update all pokemon attributes](docs/pokemonPut.md): `PUT /api/pokemon/{id}`
* [Update specific pokemon attributes](docs/pokemonPatch.md): `PATCH /api/pokemon/{id}`
* [Remove specific pokemon](docs/pokemonDeleteOne.md): `DELETE /api/pokemon/{id}`