const SpotTree = require('../models/SpotTree');

module.exports = {
	async index(req, res) {
		const { zipcode, complement } = req.query;
		const treeFall = await SpotTree.find({ zipcode, complement });

		return res.json(treeFall);
	},
	async store(req, res) {
		const { complement, zipcode, latitude, longitude } = req.body;
		const { filename } = req.file;

		let spotTree = SpotTree;

		const location = {
			type: 'Point',
			coordinates: [longitude, latitude],
		};

		spotTree = await SpotTree.create({
			thumbnail: filename,
			complement,
			zipcode,
			location,
		})

		return res.json(spotTree);
	},
};
