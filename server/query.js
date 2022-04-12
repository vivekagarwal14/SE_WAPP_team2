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

// const updateUser = (request, response) => {
//     const {first_name, last_name, email, password} = request.body
  
//     pool.query('UPDATE bank_user SET last_name = &1, email = &2, password = $3 WHERE first_name = $4', [last_name, email, password, first_name], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(201).send(`User updated`)
//     })
//   }
// const deleteUser = (request, response) => {
//   const {first_name} = request.body

//   pool.query('DELETE FROM bank_user WHERE first_name = $1', [first_name], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send(`User deleted`)
//   })
// }

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE bank_user SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM bank_user WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
