import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // Importa um ícone alternativo

const MusicCard = ({ imageUrl, name, artistName, spotifyUrl }) => {
  const finalImageUrl = imageUrl || 'https://via.placeholder.com/150'; // URL de imagem de backup
  return (
    <Box
      sx={{
        width: 200,
        minWidth: 200,
        height: 300,
        textAlign: 'center',
        p: 2,
        backgroundColor: '#1C1C28',
        borderRadius: '8px',
        color: '#E0E0FF',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.2s',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <img
          src={finalImageUrl}
          alt={name}
          style={{
            width: '100%',
            maxHeight: '160px',
            objectFit: 'cover',
            borderRadius: '6px',
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 120,
          right: 15,
          color: 'white',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '50%',
          transition: 'opacity 0.3s',
          opacity: 0,
          '&:hover': { opacity: 1 },
          '&:hover .play-icon': { color: '#1DB954' },
        }}
      >
        <IconButton href={spotifyUrl} target="_blank" rel="noopener noreferrer">
          {spotifyUrl ? <PlayArrowIcon className="play-icon" sx={{ fontSize: 50 }} /> : <MusicNoteIcon sx={{ fontSize: 50 }} />}
        </IconButton>
      </Box>
      <Typography
        variant="subtitle1"
        sx={{
          mt: 1,
          fontWeight: 'bold',
          whiteSpace: 'normal',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxHeight: '2.5em',
          lineHeight: '1.25em',
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          whiteSpace: 'normal',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          color: '#B0B0FF',
          maxHeight: '2.5em',
          lineHeight: '1.25em',
        }}
      >
        {artistName}
      </Typography>
    </Box>
  );
};

export default MusicCard;