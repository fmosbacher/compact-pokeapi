# Remove all pokemons

Remove all pokemons stored in the database

#### URL: `/api/pokemon`

#### Method: `DELETE`

#### Auth requested: YES

#### Data constraints:

```javascript
headers: {
	"Authentication": "Bearer [Token]"
}
```

#### Success response

* Message and delete information - 200 OK