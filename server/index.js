const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON
app.use(express.json());

// Rota básica
app.get('/', (req, res) => {
  res.send('Hello World from the backend!');
});

// Rota de exemplo para dados
app.get('/api/data', (req, res) => {
  res.json({ message: 'Esta é uma rota de API de exemplo!' });
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
