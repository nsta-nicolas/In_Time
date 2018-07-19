const express = require("express");
const user = require("../models/user");
const { encode, compare } = require("../auth/pwd")
const jwt = require('jsonwebtoken')

const router = express.Router();

router.post("api/register", (req, res) => {
  const { lastname, firstname, addressmail, password } = req.body;
  user
    .notExist(email)
    .then(bool => encode(password))
    .then(hash =>
      user.createUser({
        firstname,
        lastname,
        addressmail,
        password: hash,
        role: "user"
      })
    )
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.post("api/login", (req, res) => {
  const { addressmail, password } = req.body;
  user
    .getByEmail(addressmail)
    .then(user => {

      // cet email n'existe en BDD
      if(!user) {
        return res.status("401").json({ error: "bad email" });
      }

      //password === userpassword
      return compare(password, user.password).then(authorized => {
        const {id, firstname, lastname, addressmail, role } = user;
        if(authorized) {
          // generation du token
          const token = jwt.sign({ id, addressmail, role }, process.env.JWT_SECRET, { expiresIn: '3h' });
          return res.json({token, user: { id, firstname, lastname }}) 
        } else {
          return res.status('401').json({error: 'bad password'}) // le mot de passe envoyé ne correspond pas au mot de passe stocké en BDD
        }
      })
    })
    .catch(err => res.json(err));
});

module.exports = router;
