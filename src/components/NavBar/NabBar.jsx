import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalStateContext';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import CardWidget from '../CardWidget/CardWidget';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  const {setToCart} = useContext(GlobalContext)

  return (
    <AppBar position="fixed" style={{backgroundColor: 'transparent', boxShadow: 'none', padding: '0 20px'}}>
      <Container style={{backgroundColor: '#121212', borderBottomLeftRadius: '25px', borderBottomRightRadius: '25px', maxWidth: '100%'}}>
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} >
            <Link onClick={() => setToCart(false)} to={'/'} style={{color: 'white', textDecoration: 'none'}}>La Tienda Pe'</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            TIENDA PE'
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>

          <Box sx={{ flexGrow: 0 }} style={{marginRight: '15px'}}>
            <Tooltip title = 'User'>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
          </Box>

          <Box>
            <CardWidget></CardWidget>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;