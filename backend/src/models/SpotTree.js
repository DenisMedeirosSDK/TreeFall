const mongoose = require('mongoose');

const PointSchema = require('./utils/PointSchema')

const SpotTree = new mongoose.Schema({
    thumbnail: String,
    complement: String,
    zipcode: String,
    location: {
        type: PointSchema,
        index: "2dsphere"
    },
});

module.exports = mongoose.model('SpotTree', SpotTree);
