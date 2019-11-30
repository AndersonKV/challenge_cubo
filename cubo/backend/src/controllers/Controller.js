//index, show, store, update, destroy
const User = require('../models/User')

module.exports = {
	async store(req, res) {
		const { name, lastName, y } = req.body;

		const user = await User.create({name, lastName, y})
		return res.json(user)
	},
	async show(req, res) {
		const user = await User.find()
		return res.json(user)
	},
	async destroy(req, res) {
		try {
			await User.findByIdAndRemove(req.params.id);
 			return res.send({sucesso: 'removido com sucesso'});
		} catch (err) {
			return res.status(400).send({error: 'error deleting'});
		}
	},
};