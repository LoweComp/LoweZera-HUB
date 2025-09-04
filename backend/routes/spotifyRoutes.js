const express = require('express');
const router = express.Router();
const axios = require('axios');
const querystring = require('querystring');

// Função para obter o token de acesso do Spotify
const getSpotifyToken = async () => {
  try {
    const tokenResponse = await axios.post(
      'https://accounts.spotify.com/api/token',
      querystring.stringify({
        grant_type: 'client_credentials',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            Buffer.from(
              process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
            ).toString('base64'),
        },
      }
    );
    return tokenResponse.data.access_token;
  } catch (error) {
    console.error('Error fetching Spotify token:', error.response.data);
    throw new Error('Failed to get Spotify token');
  }
};

// Rota para obter novos lançamentos
router.get('/releases', async (req, res) => {
  try {
    const token = await getSpotifyToken();

    const response = await axios.get(
      'https://api.spotify.com/v1/browse/new-releases',
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
        params: {
          limit: 20,
        },
      }
    );
    res.json(response.data.albums);
  } catch (error) {
    console.error('Error fetching Spotify releases:', error.response.data);
    res.status(500).json({ message: 'Error fetching new releases from Spotify' });
  }
});

module.exports = router;