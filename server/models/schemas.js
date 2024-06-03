const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    displayName: String, 
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    sessionToken: String, // Adicione um campo para armazenar o token de sessão
    failedLoginAttempts: { type: Number, default: 0 },
    blockExpires: { type: Date, default: null },
    confirmationToken: String, // Token de confirmação por email
    confirmationExpires: Date // Data de expiração do token de confirmação
});

module.exports = mongoose.model('User', userSchema);
