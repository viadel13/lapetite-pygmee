import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react'

const Reservation = () => {
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
          >Reservation</Typography>
          <Typography variant='p' sx={{ textTransform: 'uppercase', fontWeight: '400', fontFamily: 'var( --font-primary)', fontSize: '40px', textAlign: 'center' }}>
          Réservez votre
            <Typography variant='span' sx={{ color: '#ce1212' }}> séjour </Typography>
            avec nous
          </Typography>
        </Stack>
      </>
    </Container>
    </Box>
  )
}

export default Reservation;
