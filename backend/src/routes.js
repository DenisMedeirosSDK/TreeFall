const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/uploads');
const SpotTreeController = require('./controllers/SpotTreeController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/spottree', SpotTreeController.index);
routes.post('/spottree', upload.single('thumbnail'), SpotTreeController.store);

module.exports = routes;
