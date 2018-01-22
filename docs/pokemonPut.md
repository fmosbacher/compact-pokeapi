# Update all pokemon data

Update all attributes of a pokemon

#### URL: `/api/pokemon/{id}`

#### Method: `PUT`

#### Auth requested: YES

#### Data constraints:

```javascript
headers: {
	"Content-Type": "multipart/form-data"
	"Authentication": "Bearer [Token]"
},
body: {
	"id": "[Number]",
	"name": "[String]",
	"image": "[File]",
	"stats": {
		"speed": "[Number]",
		"specialDefense": "[Number]",
		"specialAttack": "[Number]",
		"defense": "[Number]",
		"attack": "[Number]",
		"hp": "[Number]"
	},
	"baseExperience": "[Number]",
	"weight": "[Number]",
	"abilities": "[String Array]",
	"moves": "[String Array]"
}
```

#### Success response

* Updated pokemon - 200 OK