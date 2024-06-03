// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const password = process.env.MONGO_PASSWORD; // Senha do arquivo .env
        const user = process.env.MONGO_USER; // Usuário do arquivo .env
        const cluster = process.env.MONGO_CLUSTER; // Cluster do arquivo .env
        const encodedPassword = encodeURIComponent(password); // Codificando a senha para URL
        const uri = `mongodb+srv://${user}:${encodedPassword}@${cluster}/?retryWrites=true&w=majority`;

        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;
