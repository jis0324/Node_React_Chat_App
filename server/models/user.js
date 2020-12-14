const mongoose = require('mongoose');

// Creates chat schema

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    token: String,
    created: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', UserSchema);
