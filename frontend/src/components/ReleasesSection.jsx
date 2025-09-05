import React from 'react';
import { Typography, Box, CircularProgress, Alert } from '@mui/material';
import MusicCard from './MusicCard';

const ReleasesSection = ({ releases, loading, error }) => {
  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
<Box sx={{ mt: 4 }}>
  <Typography variant="h3" component="h2" gutterBottom> 
    Lançamentos da Semana
  </Typography>
  <Box sx={{ display: 'flex', gap: '20px', overflowX: 'auto', p: 1 }}>
    {releases.map(item => (
      <MusicCard
        key={item.id}
        imageUrl={item.images[0]?.url}
        name={item.name}
        artistName={item.artists[0]?.name}
      />
    ))}
  </Box>
</Box>
 );
};

export default ReleasesSection;