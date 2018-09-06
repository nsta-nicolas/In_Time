if (!process.env.production) {
  require('dotenv').config();
}
const db = require('./back/models/db.js');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const Moviedb = require('moviedb')('e9f612f1da425d22c891bc4c5a4ddde8');

// install npm dotenv
// catcher certain fichier qui ne seront pas envyer lors d'un commit

//   body parser
app.use(express.json());
app.use(cors());
// middleware to escape simple quotes
// I use simple quotes in SQL queries (cf. model)
app.use((req, res, next) => {
  if (req.body.serie && req.body.serie.overview) {
    req.body.serie.overview = req.body.serie.overview.replace(/\'/g, "''");
  }
  // req.body.serie = Object.entries(req.body.serie).reduce(
  //   (acc, [key, value]) => {
  //     if (typeof value === 'string') {
  //       console.log('double cote', acc[key]);
  //       return value.replace(/\'/g, "''");
  //     } else {
  //       return value;
  //     }
  //     // acc[key] = typeof value === 'string' ? value.replace(/\'/g, "''") : value;
  //     return acc;
  //   },
  //   {}
  // );
  next();
});

app.use('/api/series', require('./back/controllers/list'));
app.use('/api/users_series', require('./back/controllers/card'));
app.use('/api/users', require('./back/controllers/user'));
app.use('/api/auth', require('./back/controllers/auth'));

// app.use('/', express.static(__dirname + '/front/dist'));

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/index.html'));
});

//lancer le port 3030 : nodeindex.js
const port = process.env.PORT || 3030;
app.listen(port, err => {
  if (err) {
    return console.log('erreur de connection');
  }
  console.log('prêt à travailler');
});
