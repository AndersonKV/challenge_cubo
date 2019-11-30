const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: String,
	lastName: String,
	y: Number,
})

module.exports = mongoose.model('UserCubo', UserSchema);