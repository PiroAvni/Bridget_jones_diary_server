# Bridget Jones Diary - Server-Side

## Installation

To get started, clone the repository through the command line [Git Hub Repo](git@github.com:PiroAvni/Bridget_jones_diary_server.git).

Once cloned, install the dependencies for the repo by running the following commands (you do not have to run the first command if your command line is already inside the newly cloned respository):

cd Bridget_jones_diary_server

```npm install```

To run the code locally, type ```npm run dev``` in the terminal.

The server will be running on [!]http://localhost:3000/(http://localhost:3000/)

## Usage
To access the live data for each continent the following End-point are:
1.  https://bridget-jones-diary-server.onrender.com/users/register
2.  https://bridget-jones-diary-server.onrender.com/users/login
3.  https://bridget-jones-diary-server.onrender.com/users//category?

## Resful APIs

RESTful APIs most commonly utilize HTTP requests. Four of the most common HTTP methods in a REST environment are `GET`, `POST`, `PUT`, and `DELETE`, which are the methods by which a developer can create a CRUD system.

`Create`: Use the `HTTP POST` method to create a resource in a REST environment \
`Read`: Use the `GET` method to read a resource, retrieving data without altering it \
`Update`: Use the `PUT` method to update a resource \
`Delete`: Use the `DELETE` or `DESTROY` method to remove a resource from the system

### RESTful = HTTP

### Posts
  - `diary /diary - GET` - AS A USER I CAN SEE ALL THE POSTS
  - `show /diary/:id` - GET
  - `create /diary` - POST
  - `update /diary/:id` - PATCH
  - `destory /diary/:id` - DELETE

### Users
  - `index /users - GET` - AS A USER I CAN SEE ALL THE CUSTOMERS
  - `show /users/register` - Post
  - `create /users/login` - POST
  - `update /users/:id` - PATCH
 



## Technoloies 

* javascript
* node.js
* Express.js
* NPM
* nodemon
* json
* CRUD 
* RESFUL API
* Git
* Postgres - Database
* Hoppscotch - (Testing the API End-Points)
* Postman - (Testing the API End-Points)
* jest - ( Testing framework )
* SuperTest (HTTP assertions made easy via superagent.)

## Process

nce Nodejs and Express.js was installed, the following code was added:

```index.js```

The following code:

```js
require('dotenv').config();
const api = require('./api')

const port = process.env.PORT || 5000
 
api.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
```
In the ```api.js```

```js
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const app = express()

api.use(cors())
api.use(logger('dev'))


api.get("/", (req, res) => {
    res.json({
        name: "Discretion",
        description: "Send and receive private messages."
    })
})

module.exports = api
```

## WORK FLOW TO BUILD AN API

  MODEL/DB -> CONTROLLER ->  ROUTER -> APP


  ## NPM PACKAGES 

* cors
* dotenv
* express
* morgan
* nodemon

#### Database
* pg

## Testing

* jest 
* supertest
