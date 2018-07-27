const db = require('./db');

module.exports = {
  getFullLists() {
    return (
      db
        .query(
          `
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
    ORDER BY c.id;`
        )
        // cards has to be parse as JSON
        .then(result =>
          result.map(item =>
            Object.assign(item, { cards: JSON.parse(item.cards) })
          )
        )
    );
  },
  /**
   * none arguments
   * return a serie of series
   */
  getLists() {
    return db.query('SELECT * FROM series ORDER BY id');
  },

  createSeries(api_id, name, description, photo) {
    console.log(name, description, photo, api_id);
    return db.query(`INSERT INTO series(api_id, name, description, photo) VALUES (
      '${api_id}',
      '${name}',
      '${description}',
      '${photo}'
  )`);
    //todo
    //ajouter un parametre photo(url de l'API) et id(API_id)
    // verifier que la serie n'existe pas dans series grace a l'api id
    // ajouter un insert a la table users_series

    // return db.query(`INSERT INTO series(name, description) VALUES ('friends','groupe d\'amis');`)
  },

  getSerie(api_id) {
    return db
      .query(`SELECT * from series WHERE api_id=${api_id};`)
      .then(result => {
        // console.log(result);
        return result.rows && result.rows.length > 0 ? result.rows[0] : false;
      });
  },
  getUserSeries(userId) {
    return db.query(
      `SELECT * from users_series join series on users_series.serie_id=series.id  where user_id='${userId}' `
    );
  },
  updateList({ id, name }) {
    return db.query(`UPDATE series SET name='${name}' WHERE id=${id}`);
  },
  deleteList(id) {
    return db.query(`DELETE FROM series WHERE id=${id}`);
  }
};
