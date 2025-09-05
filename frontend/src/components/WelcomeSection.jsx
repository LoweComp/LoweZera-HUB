import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import backgroundImage from '../assets/LOWE-HUB.png';

const WelcomeSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        color: 'white', 
        py: 8, 
        mb: 4, 
        borderRadius: '8px', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px', 
        position: 'relative', 
      }}
    >
      {/* Overlay legibilidade do texto */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.30)', 
          borderRadius: '8px',
          zIndex: 1, 
        }}
      />
      <Container maxWidth="md" sx={{ textAlign: 'center', zIndex: 2 }}> 
        <Typography variant="h3" component="h1" gutterBottom>
          Bem-vindo ao LoweZera HUB!
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: '1.1rem' }}>
          Aqui você encontra as Últimas Notícias e os Lançamentos mais Recentes 🔥
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: '1.1rem' }}>
          Tudo para você Otimizar sua Criação de Conteúdo Musical! 🎶
        </Typography>
      </Container>
    </Box>
  );
};

export default WelcomeSection;