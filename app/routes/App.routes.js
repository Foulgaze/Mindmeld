const express = require('express');
const router = express.Router();
const AppController = require('../controllers/App.controller');

router.get('/', AppController.home);

module.exports = router;
