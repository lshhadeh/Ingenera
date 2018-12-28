const jwt = require('jsonwebtoken');
const config = require('../utils/config');
module.exports = baseAuth = (req, res, next) => {
	const token = req.get('Authorization').split(' ');
	if (token[0] !== 'Bearer') {
		res.sendStatus(401);
	}
	const user = jwt.verify(token[1], config.secret);
	req.user = user;
	return next();
};
