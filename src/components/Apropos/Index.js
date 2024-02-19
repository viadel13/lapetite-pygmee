import React, { useEffect, useState } from 'react';
import { Avatar, Backdrop, Box, CircularProgress, Container, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Paper, Stack, Typography } from '@mui/material';
import heroIm from '../../assets/images/about.jpg';
import about2 from '../../assets/images/about2.jpg';
import { DoubleArrow, PlayCircle, PlayCircleTwoTone } from '@mui/icons-material';
import { Blurhash } from "react-blurhash";

const Apropos = () => {

  const blurhashValue = "L5Bz2z00K-R4-.4:-;ro00_3s*XB";
  const [loadImage, setLoadImage] = useState(false)

  const handleLoad = () => {
    setLoadImage(true)
  }

  return (
    <Box>
      <Container disableGutters sx={{ maxWidth: { xs: 'xs', sm: 'md', md: 'xs', lg: 'lg', xl: 'xs' } }}>
        <>

          <Stack mt={3} spacing={2} justifyContent='center' alignItems='center'>
            <Typography
              variant='h6'
              component='h2'
              sx={{
                color: '#7f7f90',
                fontWeight: 400,
                letterSpacing: '1px',
                fontSize: '13px',
              }}
            >A propos de nous</Typography>
            <Typography variant='p' sx={{ textTransform: 'uppercase', fontWeight: '400', fontFamily: 'var( --font-primary)', fontSize: '40px', textAlign: 'center' }}>
              En savoir plus
              <Typography variant='span' sx={{ color: '#ce1212' }}> Sur nous</Typography>
            </Typography>
          </Stack>

          <Grid container spacing={{ xs: 2, sm: 4, md: 8, lg: 8 }}>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Box
                  display='flex'
                  alignItems="flex-end"
                  justifyContent='center'
                  mt={6}
                  sx={{
                    backgroundSize: 'cover',
                    height: { xs: '400px', sm: '400px', md: '70vh', lg: '80vh' },
                    width: { xs: '100%', sm: '90%', md: '100%' },
                    backgroundPosition: 'center',
                    position: 'relative',
                  }}
                >

                  {/* {
                    !loadImage && <Blurhash hash={blurhashValue} style={{display:'block', width: '100%', height: '100%'}}/>
                  } */}

                  <img
                    src={heroIm}
                    alt='d'
                    width='100%'
                    height='100%'
                    style={{ objectFit: 'cover' }}
                    onLoad={handleLoad}
                  /> 

                  <Paper sx={{ position: 'absolute', mb: '10px', padding: '40px', width: '80%', textAlign: 'center', fontWeight: 700, fontSize: '18px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                    <Typography variant='h4'>Reservation</Typography>
                    <Typography variant='p' sx={{ color: '#ce1212' }}>+237 696746857</Typography>
                  </Paper>
                </Box>


              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
              >
                <Box sx={{ width: { xs: '100%', sm: '90%', md: '100%' } }}>
                  <Stack mt={4} sx={{ p: { xs: '0 12px', sm: '0 12px', md: '0' } }}>
                    <Typography variant='p' sx={{ fontStyle: 'italic', color: '#212529', lineHeight: '25px' }}>
                      Bienvenue à notre restaurant camerounais, une oasis de saveurs authentiques et de traditions culinaires. Notre établissement est une célébration de la richesse gastronomique du Cameroun, offrant une expérience unique à chaque visite. Découvrez nos délices culinaires, préparés avec amour et dévouement par nos chefs talentueux.<br /><br />
                      Points forts de notre restaurant :
                    </Typography>
                    <List sx={{ color: '#212529' }}>
                      <ListItem disableGutters sx={{ py: 1 }}>
                        <DoubleArrow sx={{ color: '#ce1212', mr: '2px' }} />
                        <ListItemText
                          primary='Cuisine traditionnelle camerounaise'
                        />
                      </ListItem>
                      <ListItem disableGutters sx={{ py: 1 }}>
                        <DoubleArrow sx={{ color: '#ce1212', mr: '2px' }} />
                        <ListItemText
                          primary='Plats préparés avec des ingrédients frais et locaux'
                        />
                      </ListItem>
                      <ListItem disableGutters sx={{ py: 1 }}>
                        <DoubleArrow sx={{ color: '#ce1212', mr: '2px' }} />
                        <ListItemText
                          primary='Ambiance chaleureuse et accueillante'
                        />
                      </ListItem>
                      <ListItem disableGutters sx={{ py: 1 }}>
                        <DoubleArrow sx={{ color: '#ce1212', mr: '2px' }} />
                        <ListItemText
                          primary='Service exceptionnel de notre équipe dévouée'
                        />
                      </ListItem>
                      <ListItem disableGutters sx={{ py: 1 }}>
                        <DoubleArrow sx={{ color: '#ce1212', mr: '2px' }} />
                        <ListItemText
                          primary='Large sélection de vins et boissons'
                        />
                      </ListItem>
                      <ListItem disableGutters sx={{ py: 1 }}>
                        <DoubleArrow sx={{ color: '#ce1212', mr: '2px' }} />
                        <ListItemText
                          primary='Événements spéciaux et soirées à thème'
                        />
                      </ListItem>
                    </List>

                    <Typography variant='p' sx={{ color: '#212529', lineHeight: '25px' }}>
                      Chez nous, chaque repas est une expérience culinaire inoubliable, et nous sommes impatients de vous accueillir pour partager la richesse de notre culture à travers nos plats délicieux.
                    </Typography>
                  </Stack>
                  <Box
                    mt={4}
                    mb={4}
                    display='flex'
                    alignItems="center"
                    justifyContent='center'
                    sx={{
                      background: `linear-gradient(rgba(15, 23, 43, 0.8), rgba(15, 23, 40, 0.8)), url(${about2})`,
                      backgroundSize: 'cover',
                      minHeight: '40vh',
                      backgroundPosition: 'center',
                      position: 'relative',

                    }}
                  >
                    <IconButton>
                      <PlayCircleTwoTone sx={{ fontSize: '80px', color: '#ce1212' }} />
                    </IconButton>

                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>

        </>
      </Container>
    </Box>
  );
};

export default Apropos;
