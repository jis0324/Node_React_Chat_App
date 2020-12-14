const mongoose = require('mongoose');
const User = require('../models/user');

const signin = async (req, res) => {
	const { body } = req;

	await User.findOne({ email: body.email, password: body.password })
	.select('username')
	.exec(function (err, result) {
		console.log(result);
		if (result !== null && result !== undefined) {
			console.log(111)
			res.status(201).send({
				username: "user.username"
			});
			
		} else {
			console.log(222);
			return res.status(500).send({message: "Email and Password Invalid!"});
		}
	});
	
}

module.exports = signin;