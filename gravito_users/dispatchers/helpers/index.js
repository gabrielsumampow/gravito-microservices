const User = require('../definitions/Users');
const { errorResponse, successResponseWithoutData, successResponseWithData } = require('../responsers');

const bcrypt = require('bcryptjs');

exports.signIn = async (data) => {
    try {
        const { email, password } = data;
        const userResponse = await exports.checkUser(email);
        if (userResponse.status !== 200) {
            return userResponse;
        }
        
        const user = userResponse.data;
        
        const passwordResponse = await exports.checkPassword(password, user.password);
        if (passwordResponse.status !== 200) {
            return passwordResponse;
        }
        
        return successResponseWithData(user, 'User signed in successfully', 200);
    } catch (err) {
        return errorResponse(err.message, 500);
    }
}
exports.registerUser = async (data) => {
    try {
        const { firstname, lastname, email, phonenumber, avatar, birthdate, place, gender, status, password } = data;

        const isEmailAlreadyExists = await exports.checkEmail(email);
        if (isEmailAlreadyExists){
            return isEmailAlreadyExists;
        }

        const hashedPassword = await exports.hashPassword(password);
        const newUser = new User({ firstname, lastname, email, phonenumber, avatar, birthdate, place, gender, status, password: hashedPassword });
        await newUser.save();

        return successResponseWithData(newUser, 'User registered successfully', 201);
    } catch (err) {
        return errorResponse(err.message, 500);
    }
}

exports.getAllUsers = async () => {
    try {
        const users = await User.find();
        return successResponseWithData(users, 'All Users retrieved successfully', 200);
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
        return successResponseWithData(user, 'User with id ' + id + ' retrieved successfully', 200);
    } catch (err) {
        return errorResponse(err.message, 500);
    }
}

exports.checkEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        if (user) {
            return errorResponse('Email already exists', 409);
        }
        return null;
    } catch (err) {
        return errorResponse(err.message, 500);
    }
}

exports.checkUser = async (email) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return errorResponse('User not found', 404);
        }
        return successResponseWithData(user, 'User retrieved successfully', 200);
    } catch (err) {
        return errorResponse(err.message, 500);
    }
}

exports.checkPassword = async (password, hashedPassword) => {
    try {
        const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);
        if (!isPasswordCorrect) {
            return errorResponse('Incorrect password', 401);
        }
        return successResponseWithoutData('Password is correct', 200);
    } catch (err) {
        return errorResponse(err.message, 500);
    }
}

exports.hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    } catch (err) {
        return errorResponse(err.message, 500);
    }
}