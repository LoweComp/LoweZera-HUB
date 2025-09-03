const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  // termo e filtros
    const { query, language, sortBy } = req.query;

  // termo de busca existe?
  if (!query) {
    return res.status(400).json({ message: 'Missing search query' });
  }

  try {
    const params = {
      q: query,
      apiKey: process.env.NEWS_API_KEY,
      sortBy: sortBy || 'publishedAt', // As mais recentes primeiro
      language: language || 'pt' 
    };

    const response = await axios.get('https://newsapi.org/v2/everything', { params });

    res.json(response.data.articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching news', error: error.message });
  }
});

module.exports = router;