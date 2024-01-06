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
  IconButton
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from "@mui/icons-material";
import styled from "@emotion/styled";

const DrawerMenu = () => {
  const [state, setState] = useState({
    left: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const CustomStyled = styled('a')({
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '16px',
    color: '#7f7f90',
    margin: '10px 0',
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
          <ListItemButton>
            <ListItemText primary={
              <CustomStyled href="#">
                Accueil
              </CustomStyled>
            } />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={
              <CustomStyled href="#">
                A propos
              </CustomStyled>
            } />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={
              <CustomStyled href="#">
                Menu
              </CustomStyled>
            } />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={
              <CustomStyled href="#">
                Services
              </CustomStyled>
            } />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={
              <CustomStyled href="#">
                Galerie
              </CustomStyled>
            } />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={
              <CustomStyled href="#">
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
