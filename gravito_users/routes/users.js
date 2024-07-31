var express = require('express');
var router = express.Router();

const User = require('../dispatchers/definitions/Users');
const { getAllUsersHandler, getUsersByIdHandler, registerUserHandler, signInHandler } = require('../dispatchers/Users');
const { successResponseWithData, errorResponse } = require('../dispatchers/responsers');

router.get('/', getAllUsersHandler);
router.post('/signin', signInHandler);
router.post('/register', registerUserHandler);

router.get('/:id', getUsersByIdHandler);

module.exports = router;
