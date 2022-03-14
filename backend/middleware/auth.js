const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userid = decodedToken.userId;
    req.auth = {userid}
    if (req.body.userid && req.body.userid !== userid) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch(e) {
    console.log(e);
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};