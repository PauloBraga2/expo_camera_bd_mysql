const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Configurar a conexão com o MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // seu usuário do MySQL
  password: 'i51650',  // sua senha do MySQL
  database: 'qr_codes' // nome do banco de dados
});

// Conectar ao MySQL
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados MySQL:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Configurar o app Express
const app = express();
app.use(cors());
app.use(express.json());

// Rota para salvar QR Code no MySQL
app.post('/api/qr-codes', (req, res) => {
  try {
    console.log("Dados recebidos:", req.body);  // Log para visualizar os dados recebidos
    const { data } = req.body;

    if (!data) {
      return res.status(400).json({ message: 'Dados do QR Code são obrigatórios.' });
    }

    // Inserir os dados na tabela do MySQL
    const query = 'INSERT INTO qr_codes (data) VALUES (?)';
    connection.query(query, [data], (err, result) => {
      if (err) {
        console.error("Erro ao salvar no banco de dados:", err);  // Log detalhado do erro
        return res.status(500).json({ message: 'Erro ao salvar QR Code', error: err.message });
      }
      
      console.log("QR Code salvo com sucesso:", result);  // Log para confirmar a inserção
      res.status(200).json({ message: 'QR Code salvo com sucesso!' });
    });

  } catch (error) {
    console.error("Erro ao salvar no banco de dados:", error);  // Log detalhado do erro
    res.status(500).json({ message: 'Erro ao salvar QR Code', error: error.message });
  }
});

// Iniciar o servidor
const port = 4000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
