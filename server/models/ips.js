const mongoose = require('mongoose');

const ipSchema = new mongoose.Schema({
    ip: {
        type: String,
        unique: true,
        required: true
    },
    failedLoginAttempts: {
        type: Number,
        default: 0
    },
    blockExpires: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('IP', ipSchema);
