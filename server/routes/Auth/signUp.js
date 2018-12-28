const jwt = require('jsonwebtoken');
const { hash } = require('bcryptjs');
const config = require('../../utils/config');
const { client } = require('../../../Database/index');

module.exports = register = async (req, res) => {
	const { firstName, email, password, accepted } = req.body;
	accepted ? client.find({ email: email }, (err, data) => {
		if (err) {
			res.sendStatus(500);
		} else if (data.length > 0) {
			res.send({
				err: { code: 'ALR_EXC' },
				message: 'User Already Excits'
			});
		} else {
			hash(password, 10, (err, hash) => {
				if (err) {
					res.sendStatus(500);
				}
				const newClient = new client({ ...req.body, password: hash });

				newClient.save((err) => {
					if (err) {
						res.sentStatus(500);
					}
					const token = jwt.sign(req.body, config.secret);
					res.send({ token, valid: true, message: `Welcome ${firstName}` });
				});
			});
		}
	})
		: res.send({
			err: {
				code: 'ACC'
			},
			message: 'Please Accept The Terms And Conditions To Proceed'
		});
};
