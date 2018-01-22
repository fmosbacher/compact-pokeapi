# User login
----

Login to get the authentication Token

### URL: `/api/user/login`

### Method: `POST`

### Auth requested: NO

### Data constraints:

```javascript
headers: {
	"Content-Type": "application/x-www-form-urlencoded"
},
body: {
	"username": "[String]",
	"password": "[String]"
}
```

### Success response

* Auth Token in JSON - 200 OK

### Error responses

* Username not found - 400 Bad Request

* Wrong password - 401 Unauthorized