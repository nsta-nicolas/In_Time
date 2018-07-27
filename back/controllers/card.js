const express = require('express');
const model = require('../models/card');

module.exports = express
  .Router()
  .get('/users/series/:userId', (req, res) => {
    model
      .getUserSeries(req.params.userId)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })

  .post('/users/series', (req, res) => {
    const { user_id, serie_id } = req.body;
    model
      .addUserSeries({ user_id, serie_id })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })

  .delete('/:id', (req, res) => {
    const { id } = req.params;
    model
      .deleteCard(id)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  });
