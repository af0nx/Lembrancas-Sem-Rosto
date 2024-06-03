const express = require('express');
const cors = require('cors');
const connectDB = require('./db.js');
const authRoutes = require('./routes/router'); // Importe as rotas de autenticação
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());


app.use(express.json()); // Middleware para interpretar o corpo da requisição como JSON



connectDB();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Roteamento
app.use('/auth', authRoutes); 

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
