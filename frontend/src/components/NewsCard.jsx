import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';

const NewsCard = ({ title, imageUrl, url }) => {
  return (
    <Card
      sx={{
        width: 300,
        minWidth: 300,
        height: 380, // ALTURA FIXA PARA O CARD COMPLETO
        backgroundColor: '#1C1C28',
        color: '#E0E0FF',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        borderRadius: '8px',
        transition: 'transform 0.2s',
        display: 'flex', // Habilita Flexbox para o Card
        flexDirection: 'column', // Organiza o conteúdo em coluna
        justifyContent: 'space-between', // Distribui o espaço entre os itens
        '&:hover': {
          transform: 'scale(1.03)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={imageUrl || 'https://via.placeholder.com/300x140.png?text=Imagem+indisponível'}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1, p: 2 }}> {/* flexGrow: 1 para ocupar espaço */}
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{
            lineHeight: 1.2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 4, // Limita o texto a 3 linhas
            WebkitBoxOrient: 'vertical',
          }}
        >
          {title}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#9C27B0',
            '&:hover': { bgcolor: '#7B1FA2' },
          }}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba Mais
        </Button>
      </Box>
    </Card>
  );
};

export default NewsCard;