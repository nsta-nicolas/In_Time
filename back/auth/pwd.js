const bcrypt = require('bcrypt-nodejs')

/**
 * encode password
 * @param {String} pwd - password en clair
 * @return {string} hash
 */
exports.encode = (pwd) => {
  
  if(!pwd) { return Promise.reject( new Error('Password is not defined') ) }

  return new Promise( (resolve, reject) => {

    bcrypt.genSalt(5, (err, salt) => {
      if(err) {
        return reject( err );
      }

      bcrypt.hash(pwd, salt, null, (err, hash) => {
        if(err) {
          return reject(err);
        }

        return resolve(hash)
      });
    })
  })
}

/**
 * 
 * @param {string} pwdEnClair - password en clair. Celui récupéré du login
 * @param {*} pwdHash - hash de password - celui stocké en base de donnée
 */
exports.compare = (pwdEnClair, pwdHash) => {

  if (!pwdEnClair || !pwdHash) { Promise.reject( new Error('Bad parameters')) }
  
  return new Promise((resolve, reject) => {
      bcrypt.compare(pwdEnClair, pwdHash, (err, bool) => {
        if (err) {
          reject(err);
        }

        resolve(bool)
      });
    });
}