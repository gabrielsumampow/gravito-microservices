const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    avatar: {
        avatar_url_show: {
            type: String,
        },
        avatar_url_thumbnail: {
            type: String,
        }
    },
    birthdate: {
        type: Date,
        required: true
    },
    place: {
        country: {
            type: String,
        },
        city: {
            type: String,
        }
    },
    gender: {
        type: String,
        required: true
    },
    status: {
        is_verification: {
            type: Boolean,
        },
        is_active: {
            type: Boolean,
        }
    },
    password: {
        type: String,
        required: true
    },
    qrCode: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);