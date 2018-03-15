const { Client } = require('pg');
const db = new Client({
  connectionString : 'postgres://dost:changeme@localhost:5432/trellodb'
})

db.connect((err) => {
  if (err) {
    return console.log(err)
  }
  console.log('DB CONNECTED !!!!')
})

module.exports = db