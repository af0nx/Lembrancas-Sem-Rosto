const nodemailer = require('nodemailer');

// Configuração do transporte SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Seu endereço de email do Gmail do arquivo .env
        pass: process.env.EMAIL_PASS  // Sua senha de app do Gmail do arquivo .env
    }
});

// Verifique a configuração do transportador de e-mail
transporter.verify((error, success) => {
  if (error) {
    console.error('Erro na configuração do transportador de e-mail:', error);
  } else {
    console.log('Transportador de e-mail configurado com sucesso');
  }
});

module.exports = transporter;
