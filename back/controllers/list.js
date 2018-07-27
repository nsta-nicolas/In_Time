const express = require('express');
const model = require('../models/list');
const userSerie = require('../models/card');

module.exports = express
  .Router()
  .get('/full', (req, res) => {
    model
      .getFullLists()
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  // .get('/series', (req, res) => {
  //   model
  //     .getLists()
  //     .then(result => res.json(result))
  //     .catch(err => res.json(err));
  // })

  .post('/', (req, res) => {
    const { id, name, overview, poster_path } = req.body.serie;
    // console.log(req.body);
    console.log('essaie', id, name, overview, poster_path);
    // console.log('test1');
    model
      .getSerie(id)
      .then(result => {
        console.log('result', result);
        if (result) {
          return result;
        } else {
          console.log('creer');
          return model
            .createSeries(id, name, overview, poster_path)
            .getSerie(id)
            .catch(err => {
              console.log(err);
            });
        }
      })
      .then(result => {
        console.log('user serie');
        return userSerie.addUserSeries(req.body.userId, result.id);
      })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  .put('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    model
      .updateList({ id, name })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  .delete('/:id', (req, res) => {
    const { id } = req.params;
    model
      .deleteList(id)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  });
