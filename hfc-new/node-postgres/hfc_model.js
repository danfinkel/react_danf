const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'hfc',
  password: 'root',
  port: 5432,
});


// const getRaces = () => {
//   return new Promise(function(resolve, reject) {
//     pool.query('SELECT * FROM races ORDER BY id ASC', [], (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(results.rows);
//     })
//   }) 
// }
const getRaces = () => pool.query('SELECT * FROM races ORDER BY id ASC');
// const getRaces = () => pool.query("SELECT table_name FROM information_schema.tables;");

const createRace = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, race_date, notes } = body
    pool.query('INSERT INTO races (name, race_date, notes) VALUES ($1, $2, $3) RETURNING *', [name, race_date, notes], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new race has been added added`)
    })
  })
}
const deleteRace = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM races WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Race deleted with ID: ${id}`)
    })
  })
}

module.exports = {
  getRaces,
  createRace,
  deleteRace,
}