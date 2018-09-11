const express = require('express');
const model = require('../models/user');
const { checkTokenMiddleware } = require('../auth/jwt');
const { isAdmin } = require('../auth/authorizations');

module.exports = express
  .Router()

  .get('/existe', (req, res) => {
    model
      .UserExist()
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  .post('/', (req, res) => {
    const { lastname, firstname, addressmail, pseudo } = req.body;
    // console.log('req.body ', req.body);
    model
      .createUser({ lastname, firstname, addressmail, pseudo })
      .then(() => model.getByEmail(addressmail))
      .then(result => res.send(result))
      .catch(err => {
        if (err.code === '23505') {
          res.status(401).json({ duplicate: true });
        } else {
          res.status(500).json(err);
        }
      });
  })
  .get('/:pseudo', (req, res) => {
    console.log('user');
    const { pseudo } = req.params;
    console.log('user params', req.params);
    // console.log(pseudo);
    model
      .getUserByPseudo(pseudo)
      .then(user => {
        console.log('success', user);
        res.json(user);
      })
      .catch(err => {
        console.log('coucou', JSON.stringify(err));
        res.status(500).json(err);
      });
  })
  .get('/login/:email/:pseudo', (req, res) => {
    console.log('hoy');
    const { pseudo, email } = req.params;
    console.log('parameter', req.params);
    // console.log(pseudo);
    model
      .getPseudoMail(email, pseudo)
      .then(user => {
        console.log('success', user);
        res.json(user);
      })
      .catch(err => {
        console.log('coucou', JSON.stringify(err));
        res.status(500).json(err);
      });
  })
  .get('/mail/:email', (req, res) => {
    const { email } = req.params;
    // console.log(email);
    model.getByEmail(email).then(user => {
      // console.log({ user });
      res.json(user);
    });
  })

  .delete('/:id', (req, res) => {
    const { id } = req.params;
    model
      .deleteUser(id)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  /**
   * Move a card
   */
  .put('/:userId/card/:cardId/list', (req, res) => {
    const { userId, cardId } = req.params;
    const { listId } = req.body;
    model
      .setListCard({ userId, cardId, listId })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  /**
   * Add a card to a user
   */
  .post('/:userId/card', (req, res) => {
    const { userId } = req.params;
    const { cardId } = req.body;
    model
      .addCard({ userId, cardId })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  .put('/:id', (req, res) => {
    const { id } = req.params;
    const { firstname, lastname } = req.body;
    model
      .updateUser({ id, firstname, lastname })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  .get('/', (req, res) => {
    console.log('ouiiiiii');

    model
      .getUsers()
      .then(result => res.json(result))
      .catch(err => res.json(err));
  });
// .get('/:firstname', (req, res) => {
//   const { firstname } = req.params;
//   console.log(firstname);
//   model.getByName(firstname).then(user => {
//     console.log({ user });
//     res.json(user);
//   });
// });
// .delete('/:id', (req, res) => {
//   const { id } = req.params;
//   model.deleteUser(id)
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })
