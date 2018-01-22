# Update pokemon data
----

Update as many attributes of a pokemon as you need

### URL: `/api/pokemon/{id}`

### Method: `PATCH`

### Auth requested: YES

### Data constraints:

Array of attributes in the request body

```javascript
headers: {
	"Content-Type": "multipart/form-data"
	"Authentication": "Bearer [Token]"
},
body: {
	"[attribute]": "[value]"
}
```

### Success response

* Updated pokemon - 200 OK