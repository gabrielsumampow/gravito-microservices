const bcrypt = require('bcryptjs');

const {
  errorResponse, 
  successResponseWithData, 
  successResponseWithoutData
} = require('./responsers')

const User = require("./definitions/Users");
const { checkEmail, getAllUsers, getUsesrById } = require("./helpers");

exports.getAllUsers = async () => {
    try {
        const users = await getAllUsers();
        return successResponseWithData(users, "Users retrieved successfully", 200);
    } catch (err) {
        return errorResponse(err.message, 500);
    }
};

exports.getUserById = async (id) => {
    try {
        const user = await getUsersById(id);
        return successResponseWithData(user, "User with id " + id + " retrieved successfully", 200);
    } catch (err) {
        return errorResponse(err.message, 500);
    }
};

exports.registerUser = async (data) => {
    try {
        const { firstname, lastname, email, phonenumber, avatar, birthdate, place, gender, status, password } = data;
        const emailCheckResult = await checkEmail(email);
        if (emailCheckResult) {
            return emailCheckResult;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ firstname, lastname, email, phonenumber, avatar, birthdate, place, gender, status, password: hashedPassword });
        await newUser.save();
        return successResponseWithData(newUser, 'User registered successfully', 201);
    } catch (err) {
        return errorResponse(err.message, 500);
    }
};
