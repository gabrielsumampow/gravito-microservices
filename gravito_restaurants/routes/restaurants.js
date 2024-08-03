var express = require('express');
var router = express.Router();

const {
    getAllMenusHandler
} = require('../dispatchers/Restaurants');

router.get('/', getAllMenusHandler);

module.exports = router