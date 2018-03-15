const jwt = require('jsonwebtoken')
const user = require('../models/user')

const extractBearerToken = headerValue => {
  if (typeof headerValue !== "string") {
    return false;
  }
  const matches = headerValue.match(/(bearer)\s+(\S+)/i);
  return matches && matches[2];
};

exports.checkTokenMiddleware = (req, res, next) => {
  // 1. extraction
  const token = req.headers.authorization && extractBearerToken(req.headers.authorization);

  // 2. verifier que l'extraction a bien generé un token //if(!token) 
  if(!token) {
    return res.status(403).json({error:'Bad token I'})
  }

  // 3.verifier la qualité du token via jwt.verify
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return res.status(403).json({ error: "Bad token II" });
    }

    // 4. get id from token payload
    //console.log('decodedToken : ', decodedToken)

    // 5. get user from id
    user.getById(decodedToken.id).then( user => {
      if(!user) {
        return res.status(403).json({ error: "Bad user" });
      }

      // 6. enrichit le req ave le user recupéré
      req.user = user

      // 7. call next()
      next()

    }).catch( err => res.json(err))

  });

}