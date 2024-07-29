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