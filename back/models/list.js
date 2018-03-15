const db = require('./db')

module.exports = {

  getFullLists() {
    return db.query(`
    SELECT 
    c.id as id, 
    c.name as name, 
    JSON_AGG(
      JSON_BUILD_OBJECT('id', t.id, 'name', t.name, 'users', utr.users)
    ) as todos 
    FROM
    (
      SELECT ut.todo_id as tid, 
      JSON_AGG(
        JSON_BUILD_OBJECT(
          'id', ut.user_id, 
          'name', CONCAT(u.lastname,' ', u.firstname)
        )
      ) as users
      FROM users_todos as ut
      JOIN users as u ON u.id = ut.user_id
      GROUP BY ut.todo_id
    ) utr
    JOIN todos as t ON utr.tid = t.id
    JOIN categories as c ON c.id = t.category_id
    GROUP BY c.id
    ORDER BY c.id;`)
    // cards has to be parse as JSON
    .then(result => result.map(item => Object.assign(item, { cards: JSON.parse(item.cards) })))
  },
  /**
   * none arguments
   * return a list of lists
   */
  getLists() {
    return db.query('SELECT * FROM lists ORDER BY id')
  },
  createList(name) {
    return db.query(`INSERT INTO lists(name) VALUES ('${name}')`)
  },
  updateList({ id, name }) {
    return db.query(`UPDATE lists SET name='${name}' WHERE id=${id}`)
  },
  deleteList(id) {
    return db.query(`DELETE FROM lists WHERE id=${id}`)
  }

}

