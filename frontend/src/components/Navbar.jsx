import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

// Componente para a barra de pesquisa
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

// Ícone da lupa 
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Input estilizado da barra de pesquisa
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // paddingLeft deve ser igual à largura do SearchIconWrapper
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '60ch',
      '&:focus': {
        width: '70ch',
      },
    },
  },
}));

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      console.log('Pesquisar por:', searchTerm);
      // TODO: Implementar a lógica de busca unificada aqui
    }
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#2A0050', borderBottom: '1px solid #4B0082' }}> 
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: 'none', color: '#E0E0FF', fontWeight: 'bold' }}
        >
          LoweZera HUB
        </Typography>

        {/* Barra de Pesquisa */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Pesquisar…"
            inputProps={{ 'aria-label': 'search' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleSearch}
          />
        </Search>

        {/* Botões de Navegação */}
        <Box sx={{ ml: 2 }}>
          <Button color="inherit" component={Link} to="/register" sx={{ color: '#E0E0FF', '&:hover': { color: '#FF69B4' } }}>
            CADASTRAR
          </Button>
          <Button color="inherit" component={Link} to="/login" sx={{ color: '#E0E0FF', '&:hover': { color: '#FF69B4' } }}>
            LOGIN
          </Button>
          <Button color="inherit" component={Link} to="/dashboard" sx={{ color: '#E0E0FF', '&:hover': { color: '#FF69B4' } }}>
            DASHBOARD
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;