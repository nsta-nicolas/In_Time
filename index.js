const express = require('express')
const path = require('path')
const app = express();

app.use('/', express.static(__dirname + '/front/dist'));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'front/dist/index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, (err) => {

    if(err){
      return console.log('erreur de connection')
    }
    console.log('ready to prepare')
});