const db = require('./db')

module.exports = {

  getCards() {
    return db.query('SELECT * FROM cards ORDER BY id')
  },
  createCard({ name, masterId }) {
    return db.query(`INSERT INTO cards(name) VALUES ('${name}')`)
  },
  updateCard({ id, name, masterId }) {
    return db.query(`UPDATE cards SET name='${name}' WHERE id=${id}`)
  },
  deleteCard(id) {
    return db.query(`DELETE FROM cards WHERE id=${id}`)
  }

}