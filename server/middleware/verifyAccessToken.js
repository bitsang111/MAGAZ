const jwt = require('jsonwebtoken');
function verifyAccessToken(req, res, next) {
  try {
    console.log(1);
    // проверяем заголовок на наличие токена
    const accessToken = req.headers.authorization.split(' ')[1];
    const { user } = jwt.verify(accessToken, 'A');

    res.locals.user = user;

    next();
  } catch (error) {
    console.log('Invalid access token');
    res.status(403).send('Invalid access token');
  }
}

module.exports = verifyAccessToken;
