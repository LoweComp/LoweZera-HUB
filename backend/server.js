// Importar as bibliotecas
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const newsRoutes = require('./routes/newsRoutes');
const spotifyRoutes = require('./routes/spotifyRoutes');


// Carregar as variáveis de ambiente do .env
dotenv.config();

// Criar a aplicação Express
const app = express();

// Middleware para entender JSON nas requisições
app.use(express.json());

// Conexão com o MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Sai do processo com falha
  }
};

// Chamar a função de conexão
connectDB();

// Rotas da aplicação
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/spotify', spotifyRoutes);

// Rota de teste simples
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Definir a porta do servidor
const PORT = process.env.PORT || 5000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});