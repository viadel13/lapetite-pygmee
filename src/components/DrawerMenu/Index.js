import { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
  Avatar,
  IconButton,
  keyframes
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from "@mui/icons-material";
import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

const DrawerMenu = () => {
  const [state, setState] = useState({
    left: false,
  });

  const underlineAnimation = keyframes({
    '0%': { width: '0%' },
    '100%': { width: '100%' },
  });


  const toggleDrawer = (anchor, open) => (event) => {

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const CustomStyled = styled(NavLink)({
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '16px',
    color: '#7f7f90',
    margin: '0px 0',
    display: 'block',
    width: '100%',

    '&.active': {
      color: '#000',
      '&:after': {
        width: '100%',
      },
    },

    '&:after': {
      content: '""',
      position: 'absolute',
      backgroundColor: '#ff3c78',
      height: '2px',
      width: '0',
      left: '0',
      bottom: '-5px',
      transition: '0.3s',
      margin: '10px 0px',
    },
  })
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100vw', color: "#7f7f90", background: 'rgba(255, 255, 255, 0.9)', height: '100vh' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}

    >
      <Box
        color="black"
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: "10px 10px 10px 0",
        }}
      >
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer('right', false)}
        >
          <Close sx={{ color: '#37373f', fontSize: '30px' }} />
        </IconButton >
      </Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ '&:hover': { background: 'transparent', } }} disableRipple>
            <ListItemText primary={
              <CustomStyled to="/">
                Accueil
              </CustomStyled>
            } />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ '&:hover': { background: 'transparent', } }} disableRipple >
            <ListItemText primary={
              <CustomStyled to="/about">
                A propos
              </CustomStyled>
            } />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ '&:hover': { background: 'transparent', } }} disableRipple >
            <ListItemText primary={
              <CustomStyled to="/menu">
                Menu
              </CustomStyled>
            } />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ '&:hover': { background: 'transparent', } }} disableRipple >
            <ListItemText primary={
              <CustomStyled to="/services">
                Services
              </CustomStyled>
            } />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ '&:hover': { background: 'transparent', } }} disableRipple >
            <ListItemText primary={
              <CustomStyled to="/galerie">
                Galerie
              </CustomStyled>
            } />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ '&:hover': { background: 'transparent', } }} disableRipple >
            <ListItemText primary={
              <CustomStyled to="/contact">
                Contact
              </CustomStyled>
            } />
          </ListItemButton>
        </ListItem>
      </List>

    </Box>
  );

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <Button sx={{ color: 'white', '&:hover': { backgroundColor: 'transparent' } }} onClick={toggleDrawer('right', true)} >
        <MenuIcon sx={{ color: '#37373f', fontSize: '30px' }} />
      </Button>
      <Drawer
        anchor='right'
        open={state['right']}
        onClose={toggleDrawer('right', false)}

      >
        {list('right')}
      </Drawer>
    </Box>
  )
}

export default DrawerMenu
