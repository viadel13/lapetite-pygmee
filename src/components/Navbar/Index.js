import { AppBar, Badge, Box, Button, Container, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Toolbar, Typography, styled } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { keyframes } from '@mui/system';
import { ShoppingCartOutlined } from "@mui/icons-material";
import DrawerMenu from "../DrawerMenu/Index";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const underlineAnimation = keyframes({
    '0%': { width: '0%' },
    '100%': { width: '100%' },
  });
  const CustomStyled = styled(NavLink)({
    position: 'relative',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '16px',
    color: '#7f7f90',
    margin: '0 10px',

    '&:after': {
      content: '""',
      position: 'absolute',
      backgroundColor: '#ff3c78',
      height: '2px',
      width: '0',
      left: '0',
      bottom: '-5px',
      transition: '0.3s',
    },
    '&:hover': {
      color: '#000',
      '&:after': {
        width: '100%',
        animation: `${underlineAnimation} 0.5s forwards`,
      },
    },
    '&.active': {
      color: '#000',
      '&:after': {
        width: '100%',
        animation: `${underlineAnimation} 0.5s forwards`,
      },
    }
  });

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'white', top: 0, borderBottom: '1px solid #fff', padding: '10px 0' }} >
      <Container disableGutters sx={{ maxWidth: { xs: 'xs', sm: 'md', md: 'xs', lg: 'lg', xl: 'xs' } }}>
        <Toolbar disableGutters sx={{ marginLeft: { xs: '12px', sm: '12px', md: '0', display: 'flex', justifyContent: 'space-between' } }}>

          <Typography
            variant="h6"
            component='h1'
            sx={{ color: '#000', fontSize: '22px', fontFamily: 'var(--font-secondary)', fontWeight: '700' }}

          >
            Lapetite Pygmee
          </Typography>


          <Stack direction='row' justifyContent='center' sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}  >
            <List sx={{ display: 'flex' }}>
              <ListItem disablePadding>
                <ListItemButton disableGutters sx={{ '&:hover': { background: 'transparent', } }} disableRipple>
                  <ListItemText
                    primary={
                      <CustomStyled to="/">
                        Accueil
                      </CustomStyled>
                    }
                  />
                  <ListItemText
                    primary={
                      <CustomStyled to="/about" >
                        A propos
                      </CustomStyled>
                    }
                  />
                  <ListItemText
                    primary={
                      <CustomStyled to="/menu">
                        Menu
                      </CustomStyled>
                    }
                  />
                  <ListItemText
                    primary={
                      <CustomStyled to="/services">
                        Services
                      </CustomStyled>
                    }
                  />
                  <ListItemText
                    primary={
                      <CustomStyled to="/galerie">
                        Galerie
                      </CustomStyled>
                    }
                  />
                  <ListItemText
                    primary={
                      <CustomStyled to="/contact">
                        Contact
                      </CustomStyled>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Stack>
          <Stack sx={{display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
            <Badge badgeContent={4} color="error">
              <ShoppingCartOutlined sx={{ color: 'black' }} />
            </Badge>
          </Stack>
          <Stack direction='row' alignItems='center' spacing={4} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }} >
            <Badge badgeContent={4} color="error">
              <ShoppingCartOutlined sx={{ color: 'black' }} />
            </Badge>
            <Button size='small' variant='contained' sx={{ color: 'white', backgroundColor: '#ce1212', padding: '8px 20px', borderRadius: '50px', '&:hover': { backgroundColor: '#ce1212', color: 'white' }, textTransform: 'capitalize' }}>Connexion</Button>
          </Stack>

          <DrawerMenu />

        </Toolbar>



      </Container>

    </AppBar>
  )
}

export default Navbar
