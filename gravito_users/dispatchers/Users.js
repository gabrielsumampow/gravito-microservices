const bcrypt = require('bcryptjs');

const {
  errorResponse, 
  successResponseWithData, 
  successResponseWithoutData
} = require('./responsers')

const {
    registerUser,
    signIn,
    deleteUser,
    updateUser,
    getAllUsers,
    getUserById,
    changePassword
} = require("./helpers");

exports.signInHandler = async (req, res, next) => {
    try {
        const data = req.body;
        const response = await signIn(data);
        res.status(response.status).json(response);
    } catch (err) {
        next(err);
    }
}

exports.registerUserHandler = async (req, res, next) => {
    try {
        const data = req.body;
        const response = await registerUser(data);
        res.status(response.status).json(response);
    } catch (err) {
        next(err);
    }
}

exports.updateUserHandler = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const data = req.body;

        const response = await updateUser(userId, data);
        res.status(response.status).json(response);
    } catch (err) {
        next(err);
    }
}

exports.deleteUserHandler = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const response = await deleteUser(userId);
        res.status(response.status).json(response);
    } catch (err) {
        next(err);
    }
}
exports.getAllUsersHandler = async (req, res, next) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
}

exports.getUsersByIdHandler = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await getUserById(userId);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
}

exports.changePasswordHandler = async (req, res, next) => {
    try {
        const data = req.body;
        const response = await changePassword(data);
        res.status(response.status).json(response);
    } catch (err){
        next(err);
    }
}

exports.requestResetPasswordHandler = async (req, res, next) => {
    try {
        
    } catch (err){
        next(err);
    }
}

exports.resetPasswordHandler = async (req, res, next) => {
    try {
        
    } catch (err){
        next(err);
    }
}