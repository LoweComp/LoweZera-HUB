import React from 'react';
import { Box, Typography } from '@mui/material';

const MusicCard = ({ imageUrl, name, artistName }) => {
  return (
    <Box
  sx={{
    width: 200, // Aumenta a largura do card
    textAlign: 'center',
    p: 2, // Aumenta o padding interno
    backgroundColor: '#1C1C28',
    borderRadius: '8px',
    color: '#E0E0FF',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  }}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '6px',
        }}
      />
      <Typography
        variant="subtitle1"
        sx={{
          mt: 1,
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          color: '#B0B0FF',
        }}
      >
        {artistName}
      </Typography>
    </Box>
  );
};

export default MusicCard;