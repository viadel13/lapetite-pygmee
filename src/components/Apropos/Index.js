import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import heroIm from '../../assets/images/about.jpg'

const Apropos = () => {
  return (
    <Box>
      <Container disableGutters sx={{ maxWidth: { xs: 'xs', sm: 'md', md: 'xs', lg: 'lg', xl: 'xs' } }}>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Stack mt={3} justifyContent='center' alignItems='center'>
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


          <Box
            display='flex'
            alignItems="center"
            justifyContent='center'
            mt={6}
            sx={{
              backgroundImage: `url(${heroIm})`,
              backgroundSize: 'cover',
              height: '400px',
              width: '100%',
              backgroundPosition: 'center',
            }}

          >
            <Paper sx={{ padding: '40px', width: '80%', textAlign: 'center', fontWeight: 700, fontSize: '18px' }}>
              <Typography variant='h4'>Reservation</Typography>
              <Typography variant='p' sx={{ color: '#ce1212' }}>+237 696746857</Typography>
            </Paper>
          </Box>

        </Box>
      </Container>
    </Box>
  )
}

export default Apropos
