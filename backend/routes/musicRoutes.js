const express = require('express');
const router = express.Router();
const MusicItem = require('../models/MusicItem');
const authMiddleware = require('../middleware/authMiddleware');

// Rota para salvar um item musical (protegida por autenticação)
router.post('/', authMiddleware, async (req, res) => {
  const { spotifyId, name, type, imageUrl } = req.body;

  try {
    const item = new MusicItem({
      spotifyId,
      name,
      type,
      owner: req.user._id, // Associa o item ao usuário logado
      imageUrl,
    });

    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para obter todos os itens salvos de um usuário (protegida)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const items = await MusicItem.find({ owner: req.user._id });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;