const bcrypt = require('bcryptjs');

const {
  errorResponse, 
  successResponseWithData, 
  successResponseWithoutData
} = require('./responsers')

const User = require("./definitions/Users");
const { checkEmail } = require("./helpers");

exports.getAllUsers = async () => {
    try {
        const users = await User.find();
        return successResponseWithData(users, "Users retrieved successfully", 200);
    } catch (err) {
        return errorResponse(err.message, 500);
    }
};

exports.getUserById = async (id) => {
    try {
        const user = await User.findById(id);
        if (!user) {
            return errorResponse("User not found", 404);
        }
        return successResponseWithData(user, "User retrieved successfully", 200);
    } catch (err) {
        return errorResponse(err.message, 500);
    }
};

exports.registerUser = async (data) => {
    try {
        const { firstname, lastname, email, phonenumber, avatar, birthdate, place, gender, status, password } = data;
        await checkEmail(email);
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ firstname, lastname, email, phonenumber, avatar, birthdate, place, gender, status, password: hashedPassword });
        await newUser.save();
        return successResponseWithData(newUser, 'User registered successfully', 201);
    } catch (err) {
        return errorResponse(err.message, 500);
    }
};
