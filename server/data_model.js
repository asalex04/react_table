
const { Pool } = require('pg')
const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'test_db',
  password: '',
  port: 5432,
});

const getData = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM test ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}
const createData = (body) => {
  return new Promise(function(resolve, reject) {
    const { data, name, quantity, distance } = body
    pool.query('INSERT INTO test (data, name, quantity, distance) ' +
      'VALUES ($1, $2, $3, $4) RETURNING *', [data, name, quantity, distance], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new data has been added: ${results.rows[0]}`)
    })
  })
}
const deleteData = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM test WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Data deleted with ID: ${id}`)
    })
  })
}

module.exports = {
  getData,
  createData,
  deleteData,
}
