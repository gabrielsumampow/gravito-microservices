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
            required: true
        },
        avatar_url_thumbnail: {
            type: String,
            required: true
        }
    },
    birthdate: {
        type: Date,
        required: true
    },
    place: {
        country: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    gender: {
        type: String,
        required: true
    },
    status: {
        is_verification: {
            type: Boolean,
            required: true
        },
        is_active: {
            type: Boolean,
            required: true
        }
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);