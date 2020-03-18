const SpotTree = require('../models/SpotTree');

module.exports = {
    async index(req, res) {
        const treeFall = await SpotTree.find()

        return res.json(treeFall);
    },
    async store(req, res) {
        const { complement, critical, latitude, longitude } = req.body;
        const { filename } = req.file;

        let spotTree = SpotTree;

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };

        spotTree = await SpotTree.create({
            thumbnail: filename,
            complement,
            critical,
            location,
        })

        return res.json(spotTree);
    }
}
