

exports.isAdmin = (req, res, next) => {
  if(req.user.role !== 'admin') {
    res.status(401).json({error: 'Not admin'})
  }
  next()
}

exports.ownAccount = (req, res, next) => {
  const id = req.params.userId ||req.body.userId 
  if(req.user.id !== id) {
    res.status(401).json({ error: "Not owner" });
  }
  next()
}

