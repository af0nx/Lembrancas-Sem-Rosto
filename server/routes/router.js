const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/schemas'); 
const crypto = require('crypto'); 
const transporter = require('../emailConfig'); //email
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
const jwtSecret = '35386738962758kfslodsafks536536tg35y6ut879gusd';
const BLOCK_TIME = 15 * 60 * 1000; // Tempo de bloqueio em milissegundos (15 minutos)
const MAX_ATTEMPTS = 5; // Número máximo de tentativas antes de bloquear
const IP = require('../models/ips');

// Rota para registro de usuário
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Verifique se o e-mail já está em uso
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Este e-mail já está em uso.' });
        }

        // Criptografe a senha antes de armazená-la no banco de dados
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crie um novo usuário
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        // Salve o novo usuário no banco de dados
        await newUser.save();

        res.status(201).json({ message: 'Usuário registrado com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Ocorreu um erro ao registrar o usuário.', error: error.message });
    }
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        }

        // Gerar token de confirmação
        const confirmationToken = crypto.randomBytes(20).toString('hex');
        const confirmationExpires = Date.now() + 3600000; // 1 hora

        user.confirmationToken = confirmationToken;
        user.confirmationExpires = confirmationExpires;
        await user.save();

        // Enviar e-mail de confirmação
        const mailOptions = {
            to: user.email,
            from: 'seu-email@gmail.com',
            subject: 'Confirmação de Login',
            text: `Você está recebendo este e-mail porque solicitou um login na sua conta.\n\n
            Por favor, clique no seguinte link para completar o processo:\n\n
            http://localhost:3000/confirm/${confirmationToken}\n\n
            Se você não solicitou este e-mail, por favor ignore-o.\n`
        };

        transporter.sendMail(mailOptions, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Erro ao enviar o e-mail de confirmação.' });
            }
            res.status(200).json({ message: 'E-mail de confirmação enviado.' });
        });
    } catch (error) {
        res.status(500).json({ message: 'Ocorreu um erro ao fazer login.', error: error.message });
    }
});

router.get('/confirm/:token', async (req, res) => {
    try {
        const user = await User.findOne({ 
            confirmationToken: req.params.token, 
            confirmationExpires: { $gt: Date.now() } 
        });

        if (!user) {
            return res.status(400).json({ message: 'Token de confirmação é inválido ou expirou.' });
        }

        // Gerar token JWT
        const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
        
        // Limpar token de confirmação
        user.confirmationToken = undefined;
        user.confirmationExpires = undefined;
        await user.save();

        // Retornar o token JWT
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao confirmar o login.', error: error.message });
    }
});

router.get('/:userId/name', async (req, res) => {
    const userId = req.params.userId;

    try {
        // Busque o usuário no banco de dados pelo ID
        const user = await User.findById(userId);
        
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        // Retorna o nome do usuário
        res.status(200).json({ name: user.name });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar nome do usuário.', error: error.message });
    }
});



// Rota para esqueceu a senha
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        // Verifique se o email existe no banco de dados
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Gere um token único
        const token = crypto.randomBytes(20).toString('hex');

        // Salve o token no banco de dados junto com a data de expiração
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 7200000; // 2 horas
        await user.save();

        // Envie um email para o usuário contendo um link para a página de redefinição de senha
        const mailOptions = {
            from: 'dbwtrabalho@gmail.com', // Seu endereço de email do Gmail
            to: email,
            subject: 'Redefinição de Senha',
            text: `Você está recebendo este email porque solicitou a redefinição de senha para sua conta.\n\n` +
                `Por favor, clique no seguinte link ou cole-o em seu navegador para completar o processo:\n\n` +
                `http://localhost:3000/reset-password/${token}\n\n` +
                `Se você não solicitou isso, por favor, ignore este email e sua senha permanecerá inalterada.\n`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error:', error);
                return res.status(500).json({ message: 'Failed to send email' });
            }
            console.log('Email sent:', info.response);
            res.json({ message: 'Email sent for password reset' });
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});







module.exports = router;
