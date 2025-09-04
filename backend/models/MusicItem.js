const mongoose = require('mongoose');

const MusicItemSchema = new mongoose.Schema({
  spotifyId: { 
    type: String,
    required: true,
  },
  name: { 
    type: String,
    required: true,
  },
  type: { // ('artist', 'album', 'track')
    type: String,
    required: true,
  },
  owner: { // O usuário que salvou 
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  imageUrl: { // URL para a imagem da capa/foto do artista
    type: String,
  },
  // Outros campos adicionados posteriormente
}, {
  timestamps: true, 
});

const MusicItem = mongoose.model('MusicItem', MusicItemSchema);

module.exports = MusicItem;