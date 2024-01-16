import { useParams } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import gal1 from '../../assets/images/gal1.jpg'
import { Box, Button, ButtonGroup, Container, Divider, Grid, Rating, Stack, Typography } from '@mui/material';
import { AddShoppingCart, ShoppingBag, Star } from '@mui/icons-material';
import { useState } from 'react';

const Details = () => {
  const params = useParams();
  const [value, setValue] = useState(0);

  console.log(params);

  const handleDecrement = () => {
    if (value > 0) {
      setValue((prevValue) => prevValue - 1);
    }
  };

  return (
    <Box>
      <Container disableGutters sx={{ maxWidth: { xs: 'xs', sm: 'md', md: 'xs', lg: 'lg', xl: 'xs' } }}>
        <Box width='100%' mt={3} mb={3} sx={{ padding: { xs: '0 8px', sm: '0 8px', md: 0 } }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box width='100%'>
                <Carousel showIndicators={false} showArrows={false} emulateTouch>
                  <div >
                    <img width='100%' height='100%' src={gal1} alt='sds' style={{ borderRadius: '8px' }} />
                  </div>
                  <div >
                    <img width='100%' height='100%' src={gal1} alt='sds' style={{ borderRadius: '8px' }} />
                  </div>
                  <div >
                    <img width='100%' height='100%' src={gal1} alt='sds' style={{ borderRadius: '8px' }} />
                  </div>
                </Carousel>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant='h6' sx={{ color: '#ce1212', fontSize: '16px' }}>Traditionnel</Typography>
                <Typography
                  variant='h3'
                  mt={3}
                  sx={{ color: '#21313c', fontSize: '25px', fontWeight: 600 }}>
                  Ndole
                </Typography>
                <Stack direction='row' mt={1} mb={3} spacing={2} display='flex' alignItems='center'>
                  <Rating
                    size='small'
                    name="half-rating"
                    defaultValue={4.5}
                    readOnly
                    precision={0.5}
                  />
                  <span style={{ color: '#21313c' }}>(30 avis)</span>
                </Stack>
                <Typography variant='h6' fontSize={18} fontWeight={500}>2500 FRCFA</Typography>
                <Divider sx={{ mt: 3, mb: 3 }} />
                <Stack mt={2} spacing={3} direction='column' alignItems='flex-start' display='flex'>
                  <ButtonGroup sx={{ mt: 3 }} size='small' variant="outlined" aria-label="outlined button group">
                    <Button onClick={() => setValue(prevState => prevState + 1)}>+</Button>
                    <input type='number' onChange={(e) => setValue(parseInt(e.target.value, 10))} value={value} style={{ width: '50px', textAlign: 'center', border: '1px solid rgba(25, 118, 210, 0.5)' }} />
                    <Button onClick={handleDecrement}>-</Button>
                  </ButtonGroup>
                  <Button startIcon={<AddShoppingCart />} size='medium' variant='contained'>Ajouter</Button>
                </Stack>
                <Divider sx={{ mt: 3, mb: 3 }} />

              </Box>

            </Grid>
          </Grid>

          <Stack>
            <Typography variant='h6' sx={{ color: '#ce1212', fontSize: '16px' }}>Details</Typography>
            <Typography variant='p' sx={{ lineHeight: '25px', color: '#3d4f58' }}>
              La préparation du Ndolè implique généralement de hacher finement les feuilles de Ndolè et de les cuire avec divers ingrédients tels que de la viande, du poisson, des arachides et des assaisonnements locaux. La viande de bœuf, de porc, de chèvre ou de poisson est souvent utilisée pour ajouter une protéine savoureuse au plat.
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>

  )
}

export default Details
