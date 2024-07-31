var express = require('express');
var router = express.Router();

const { 
    getAllUsersHandler,
    getUsersByIdHandler,
    registerUserHandler, 
    signInHandler,
    deleteUserHandler,
    updateUserHandler,
    changePasswordHandler,
} = require('../dispatchers/Users');

router.get('/', getAllUsersHandler);
router.post('/signin', signInHandler);
router.post('/register', registerUserHandler);

router.get('/:id', getUsersByIdHandler);
router.delete('/:id', deleteUserHandler);
router.patch('/:id', updateUserHandler);

router.post('/change-password', changePasswordHandler);

module.exports = router;
