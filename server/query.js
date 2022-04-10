const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'banking_application',
  password: 'Khyshu#12345',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM bank_user ORDER BY userid ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO bank_user (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)', ['khyati', 'patel', 'khyatiiiii@gmail.com', 'khyati@12345'], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added`)
  })
}

module.exports = {
  getUsers,
  createUser,
}