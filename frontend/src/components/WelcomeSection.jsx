import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const WelcomeSection = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Bem-vindo ao LoweZera HUB!
      </Typography>
      <Typography variant="body1">
        Aqui você encontra as últimas notícias e os lançamentos mais recentes da música, tudo para acelerar sua criação de conteúdo musical! 🎶❤️‍🔥
      </Typography>
    </Container>
  );
};

export default WelcomeSection;