const express = require('express')

const app = express();

const port = process.env.PORT || 3000

app.get('*', (req,res) => {
    res.send('test un deux trois')
})

app.listen(port, (err) => {

    if(err){
      return console.log('erreur de connection')
    }
    console.log('ready to prepare')
});