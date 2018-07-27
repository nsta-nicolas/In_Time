const db = require('./db');

module.exports = {
  getUserSeries(userId) {
    return db
      .query(
        `SELECT * from users_series join series on users_series.serie_id=series.id where user_id='${userId}' `
      )
      .then(result => {
        return result.rows;
      });
  },
  addUserSeries(user_id, serie_id) {
    console.log(user_id, serie_id);
    return db.query(`INSERT INTO users_series(user_id, serie_id) VALUES(
      ${user_id},
      ${serie_id}
    )`);
  },

  getCards() {
    return db.query('SELECT * FROM cards ORDER BY id');
  },
  createCard({ name, masterId }) {
    return db.query(`INSERT INTO cards(name) VALUES ('${name}')`);
  },
  updateCard({ id, name, masterId }) {
    return db.query(`UPDATE cards SET name='${name}' WHERE id=${id}`);
  },
  deleteCard(id) {
    return db.query(`DELETE FROM cards WHERE id=${id}`);
  }
};
