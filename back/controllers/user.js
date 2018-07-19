const express = require('express');
const model = require('../models/user');
const { checkTokenMiddleware } = require('../auth/jwt');
const { isAdmin } = require('../auth/authorizations');

module.exports = express
  .Router()
  .get('/', (req, res) => {
    model
      .getUsers()
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  .post('/', (req, res) => {
    const { lastname, firstname, addressmail, password, pseudo } = req.body;
    // console.log(req.body);
    model
      .createUser({ lastname, firstname, addressmail, password, pseudo })
      .then(() => model.getByEmail(addressmail))
      .then(result => res.send(result))
      .catch(err => res.json(err));
    // model.UserExist({ addressmail})
  })

  .get('/users/:pseudo', (req, res) => {
    const { pseudo } = req.params;
    console.log(req.params);
    console.log(pseudo);
    model.getBypseudomail(pseudo).then(user => {
      res.json(user);
    });
  })
  .get('/mail/:email', (req, res) => {
    const { email } = req.params;
    console.log(email);
    model.getByEmail(email).then(user => {
      console.log({ user });
      res.json(user);
    });
  })
  .get('/:firstname', (req, res) => {
    const { firstname } = req.params;
    console.log(firstname);
    model.getByName(firstname).then(user => {
      console.log({ user });
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
  });
// .delete('/:id', (req, res) => {
//   const { id } = req.params;
//   model.deleteUser(id)
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })
