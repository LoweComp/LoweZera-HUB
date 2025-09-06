import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'; // Importa o ícone de play

const MusicCard = ({ imageUrl, name, artistName, spotifyUrl }) => { 
  console.log('URL recebida para o botão:', spotifyUrl); 
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
          src={imageUrl}
          alt={name}
          style={{
            width: '100%',
            maxHeight: '160px',
            objectFit: 'cover',
            borderRadius: '6px',
          }}
        />
      </Box>
      {spotifyUrl && ( // Condição para renderizar o botão apenas se houver uma URL
        <Box
          sx={{
            position: 'absolute',
            bottom: 120, 
            right: 15, 
            color: 'white',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '50%',
            transition: 'opacity 0.3s',
            '&:hover': { opacity: 1 },
            '&:hover .play-icon': { color: '#1DB954' }, 
          }}
        >
          <IconButton href={spotifyUrl} target="_blank" rel="noopener noreferrer">
            <PlayArrowIcon className="play-icon" sx={{ fontSize: 50 }} />
          </IconButton>
        </Box>
      )}
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