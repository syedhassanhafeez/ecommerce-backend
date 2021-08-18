const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 8000
app.use(bodyParser.json())
app.use(cors())

app.listen(PORT, ()=>{
    console.log(`app is listening at ${PORT}` )
})

const data = {
    "users": [
      {
        "email": "regular@example.com",
        "password": "$2a$10$2myKMolZJoH.q.cyXClQXufY1Mc7ETKdSaQQCC6Fgtbe0DCXRBELG",
        "id": 1
      },
      {
        "email": "admin@example.com",
        "password": "$2a$10$w8qB40MdYkMs3dgGGf0Pu.xxVOOzWdZ5/Nrkleo3Gqc88PF/OQhOG",
        "id": 2
      }
    ],
    "products": [
      {
        "id": "hdmdu0t80yjkfqselfc",
        "name": "shoes",
        "stock": 10,
        "price": 399.99,
        "shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
        "description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
      },
      {
        "id": "3dc7fiyzlfmkfqseqam",
        "name": "bags",
        "stock": 20,
        "price": 299.99,
        "shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
        "description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
      },
      {
        "id": "aoe8wvdxvrkfqsew67",
        "name": "shirts",
        "stock": 15,
        "price": 149.99,
        "shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
        "description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
      },
      {
        "id": "bmfrurdkswtkfqsf15j",
        "name": "shorts",
        "stock": 5,
        "price": 109.99,
        "shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
        "description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
      }
    ]
  }


app.post("/login", (req, res) => {
    console.log("In login")
    let loggedInUser = data.users.filter(item => item.email === "admin@example.com")
    res.status(200).json({user:loggedInUser.length > 0 ? loggedInUser[0] : []})
})

app.get("/users", (req, res) => {
    res.status(200).json({"users": data.users})
})

app.get("/products", (req, res) => {
    res.status(200).json({"products": data.products})
})
// app.post("/add-product", (req, res) => {
//   res.status(200).json({"add-product": data.addProduct})
// })