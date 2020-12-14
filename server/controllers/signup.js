const mongoose = require('mongoose');
const User = require('../models/user');

const signup = async (req, res) => {
	
	const { body } = req;

	await User.findOne({ email: body.email })
	.select('username')
	.exec(function (err, result) {
		if (result !== null && result !== undefined) {
			return res.status(500).send({message: "Username already exist!"});
		} else {
			const user = User.create({
				_id: new mongoose.Types.ObjectId(),
				email: req.body.email,
				password: req.body.password,
				token: '',
				username: req.body.email.split('@')[0],
			});
		
			res.status(201).send({
				username: user.username
			});
		}
	});
	
}

module.exports = signup;