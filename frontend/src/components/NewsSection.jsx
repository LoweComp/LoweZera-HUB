import React from 'react';
import { Typography, Box, CircularProgress, Alert } from '@mui/material';
import NewsCard from './NewsCard';

const NewsSection = ({ news, loading, error }) => {
  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box sx={{ mt: 4, px: 2 }}>
      <Typography variant="h3" component="h2" gutterBottom sx={{ color: '#51009eff' }}>
        Últimas Notícias
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          p: 1,
          justifyContent: 'center',
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
        {news && news
                .filter(article => article.title && article.urlToImage) // Adiciona o filtro aqui
                .map(article => (
                    <NewsCard
                        key={article.title}
                        title={article.title}
                        imageUrl={article.urlToImage}
                        url={article.url}
                    />
                ))}
      </Box>
    </Box>
  );
};

export default NewsSection;