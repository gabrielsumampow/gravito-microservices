var express = require('express');
var router = express.Router();

const User = require('../dispatchers/definitions/Users');
const { getAllUsers, getUserById, registerUser } = require('../dispatchers/Users');
const { successResponseWithData, errorResponse } = require('../dispatchers/responsers');

router.get('/', async (req, res, next) => {
    try {
        const result = await getAllUsers();
        res.status(result.status).json(result);
    } catch (err) {
        next(err);
    }
});

router.post('/register', async (req, res, next) => {
    try {
        const result = await registerUser(req.body);
        res.status(result.status).json(result);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
