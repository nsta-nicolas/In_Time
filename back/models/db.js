const { Client } = require('pg');
const db = new Client({
  user: 'user1',
  host: 'localhost',
  database: 'time',
  password: 'changeme',
  port: 5432
});
db.connect(err => {
  if (err) {
    return console.log(err);
  }
  console.log('ta base est operationnel coco !!!!');
});
//

module.exports = db;
