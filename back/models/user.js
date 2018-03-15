const db = require("./db");
const defaultListId = 1;

module.exports = {
  getUsers() {
    return db.query("SELECT * FROM users ORDER BY id");
  },
  createUser({ firstname, lastname, email, password, role }) {
    return db.query(`
    INSERT INTO users(firstname, lastname, email, password, role)
    VALUES (
    '${firstname}', 
    '${lastname}', 
    '${email}', 
    '${password}', 
    '${role}')`);
  },
  updateUser({ id, firstname, lastname }) {
    return db.query(`
    UPDATE users 
    SET firstname='${firstname}', lastname='${lastname}'
    WHERE id=${id}`);
  },
  deleteUser(id) {
    return db.query(`DELETE FROM users WHERE id=${id}`);
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
    return db
      .query(`SELECT * FROM users WHERE email='${email}'`)
      .then(result => {
        return result.rows && result.rows.length > 0 ? result.rows[0] : false;
      });
  },
  getById(id) {
    return db
      .query(`SELECT * FROM users WHERE id=${id}`)
      .then(result => {
        return result.rows && result.rows.length > 0 ? result.rows[0] : false;
      });
  },
  notExist(email) {
    return db
      .query(`SELECT * FROM users WHERE email='${email}'`)
      .then(result => {
        return result.rows && result.rows.length > 0
          ? Promise.reject({ error: "user already exists" })
          : true;
      });
  }
};
