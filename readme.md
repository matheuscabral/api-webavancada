# API APP

## Endpoints index

- [01 - User](https://github.com/LiberFly/api-app#01---user)

# Endpoints


### 01 - User

#### POST https://api.liberfly.app/users/auth - Route to authenticate a user

+ INPUT EXAMPLE

```json
{
	"email" : "ti@liberfly.com.br",
	"password" : "teste@123"
}
```

+ RETURN EXAMPLE with SUCCESS - Status 200 OK

```json
{
   "authorized": true,
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRpQGxpYmVyZmx5LmNvbS5iciJ9.607wETddqvAxEd0Ix3k0wbwgl4wQbQXfTubDa1Wneu0",
    "id": 1
}
```

#### POST https://api.liberfly.app/users - Route to create a user

+ INPUT EXAMPLE

```json
{
	"name" : "Yan Pantoja",
	"password" : "12345",
	"email" : "yan.pantoja@liberfly.com.br",
	"username" : "yanpantoja",
	"document" : "123.456.789-10"
}
```

+ RETURN EXAMPLE with SUCCESS - Status 201 Created

```json
{
    "profile": {
        "name": "Yan Pantoja",
        "email": "yan.pantoja@liberfly.com.br",
        "username": "yanpantoja",
        "document": "12345678910",
        "qr_code": "data:image/png;base64.....",
        "updated_at": "2020-01-12 15:24:30",
        "created_at": "2020-01-12 15:24:30",
        "id": 7
    }
}
```