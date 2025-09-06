import React from 'react';
import { Typography, Box, CircularProgress, Alert } from '@mui/material';
import MusicCard from './MusicCard';

const ReleasesSection = ({ releases, loading, error }) => {
  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>;
  if (error) return <Alert severity="error">{error}</Alert>;

return (
  <Box sx={{ mt: 4, px: 2 }}> 
    <Typography variant="h3" component="h2" gutterBottom sx={{ color: '#51009eff' }}> 
      Lançamentos da Semana
    </Typography>
    <Box
      sx={{
        display: 'flex',
        gap: '24px', // Aumenta o espaçamento entre os cards
        overflowX: 'auto',
        p: 1,
        // Estilos para a barra de rolagem
        '&::-webkit-scrollbar': {
          height: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#888',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#555',
        },
      }}
    >
      {releases.map(item => (
        <MusicCard
          key={item.id}
          imageUrl={item.images[0]?.url}
          name={item.name}
          artistName={item.artists[0]?.name}
          spotifyUrl={item.external_urls.spotify} 
        />
      ))}
    </Box>
  </Box>
);
};

export default ReleasesSection;