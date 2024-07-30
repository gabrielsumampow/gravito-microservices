const User = require('../definitions/Users');
const { errorResponse } = require('../responsers');

exports.checkEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        if (user) {
            return errorResponse('Email already exists', 409);
        }
    } catch (err) {
        return errorResponse(err.message, 500);
    }
}

exports.getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (err) {
        return errorResponse(err.message, 500);
    }
}

exports.getUserById = async (id) => {
    try {
        const user = await User.findById(id);
        if (!user) {
            return errorResponse('User not found', 404);
        }
        return user;
    } catch (err) {
        return errorResponse(err.message, 500);
    }
}