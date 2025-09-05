import React from 'react';
import { Typography, Box, List, ListItem, ListItemText, Alert, CircularProgress } from '@mui/material';

const NewsSection = ({ news, loading, error }) => {
  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Notícias Relevantes
      </Typography>
      <List>
        {news.map(item => (
          <ListItem key={item.url} component="a" href={item.url} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary={item.title} secondary={item.source.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NewsSection;