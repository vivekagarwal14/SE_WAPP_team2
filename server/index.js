const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./query')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/bank_user', db.getUsers)
app.post('/bank_user', db.createUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})