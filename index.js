const express = require('express')
const path = require('path')
const app = express();
// install npm dotenv
// catcher certain fichier qui ne seront pas envyer lors d'un commit 
if(!process.env.production) {
    require("dotenv").config();
  }

//   body parser
  app.use(express.json())

  // middleware to escape simple quotes
// I use simple quotes in SQL queries (cf. model)
app.use((req, res, next) => {
    req.body = Object.entries(req.body).reduce(( acc, [key, value] ) => {
      acc[key] = (typeof value === 'string') ? value.replace(/\'/g, '\'\'') : value
      return acc
    }, {})
    next();
  })


app.use('/api/lists', require('./back/controllers/list'))
app.use('/api/cards', require('./back/controllers/card'))
app.use('/api/users', require('./back/controllers/user'))
app.use('/api/auth', require('./back/controllers/auth'))

app.use('/', express.static(__dirname + '/front/dist'));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '/front/dist/index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, (err) => {

    if(err){
      return console.log('erreur de connection')
    }
    console.log('ready to prepare')
});