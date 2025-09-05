import React from 'react';
import { Typography, Box, CircularProgress, Alert } from '@mui/material';

const ReleasesSection = ({ releases, loading, error }) => {
  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Lançamentos da Semana
      </Typography>
      <Box sx={{ display: 'flex', gap: '20px', overflowX: 'auto' }}>
        {releases.map(item => (
          <Box key={item.id} sx={{ minWidth: '150px' }}>
            <img src={item.images[0]?.url} alt={item.name} style={{ width: '100%', borderRadius: '8px' }} />
            <Typography variant="subtitle1" sx={{ mt: 1 }}>{item.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ReleasesSection;