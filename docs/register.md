# User register

Register an user to login and manipulate the API

#### URL: `/api/user/register`

#### Method: `POST`

#### Auth requested: YES

#### Data constraints:

```javascript
headers: {
	"Content-Type": "application/x-www-form-urlencoded"
	"Authentication": "Bearer [Token]"
},
body: {
	"name": "[String]",
	"username": "[String]",
	"password": "[String]"
}
```

#### Success response

* The added user - 201 Created