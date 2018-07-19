const db = require('./db');
const defaultListId = 1;

module.exports = {
  getUsers() {
    return db.query('SELECT * FROM users ORDER BY id');
  },
  createUser({ lastname, firstname, addressmail, password, pseudo }) {
    // console.log({ lastname, firstname, addressmail, password, pseudo });
    return db.query(`
    INSERT INTO users(lastname, firstname, addressmail, password , pseudo )
    VALUES (
    '${lastname}', 
    '${firstname}', 
    '${addressmail}', 
    '${password}',
    '${pseudo}' 
  )`);
  },
  updateUser({ id, firstname, lastname, pseudo }) {
    return db.query(`
    UPDATE users 
    SET firstname='${firstname}', lastname='${lastname}', pseudo='${pseudo}'
    WHERE id=${id}`);
  },

  deleteUser(id) {
    return db.query(`DELETE FROM users WHERE id='${id}'`);
  },

  addCard({ userId, cardId }) {
    return db.query(`
    INSERT INTO users_cards_lists SET 
    user_id=${userId}, 
    card_id=${cardId}, 
    list_id=${defaultListId}`);
  },
  setListCard({ userId, cardId, listId }) {
    return db.query(`
    UPDATE users_cards_lists 
    SET list_id=${listId}
    WHERE user_id=${userId} 
    AND card_id=${cardId}`);
  },
  getByEmail(email) {
    console.log(email);
    return db
      .query(`SELECT * FROM users WHERE addressmail='${email}'`)
      .then(result => {
        // console.log(result);
        return result.rows && result.rows.length > 0 ? result.rows[0] : false;
      });
  },
  getBypseudomail(pseudo) {
    // console.log(pseudomail);
    return db
      .query(
        `SELECT * FROM users WHERE addressmail='${email} and pseudo='${pseudo} '`
      )
      .then(result => {
        // console.log(result);
        return result.rows && result.rows.length > 0 ? result.rows[0] : false;
      });
  },
  getByName(firstname) {
    console.log(firstname);
    return db
      .query(`SELECT * FROM users WHERE firstname='${firstname}'`)
      .then(result => {
        // console.log(result);
        return result.rows && result.rows.length > 0 ? result.rows[0] : false;
      });
  },
  getById(id) {
    return db.query(`SELECT * FROM users WHERE id=${id}`).then(result => {
      return result.rows && result.rows.length > 0 ? result.rows[0] : false;
    });
  },
  UserExist(addressmail) {
    return db
      .query(`SELECT * FROM users WHERE addressmail='${addressmail}'`)
      .then(result => {
        return result.rows && result.rows.length > 0
          ? Promise.reject({ error: 'user already exists' })
          : true;
      });
  }
};
