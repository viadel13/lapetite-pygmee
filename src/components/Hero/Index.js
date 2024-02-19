import { Avatar, Box, Container, IconButton, Stack, Typography } from '@mui/material'
import ndole from '../../assets/images/ndole2.png'
import { PlayCircleOutlined } from '@mui/icons-material'
const Hero = () => {


  return (
    <Box bgcolor='#eee'>
      <Container disableGutters sx={{ maxWidth: { xs: 'xs', sm: 'md', md: 'xs', lg: 'lg', xl: 'xs' } }}>
        <Box
          alignItems='center'
          justifyContent='space-between'
          width='100%'
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row-reverse' },
            minHeight: '100vh',
            alignItems: { xs: 'stretch', sm: 'stretch', md: 'center' },
            backgroundSize: 'cover',
            overflow: { xs: 'hidden', md: 'hidden' },
            padding: { xs: '100px 0px 60px 0px', sm: '100px 0px 60px 0px', md: '90px 0px 60px 0px' }
          }}
          columnGap={20}
        >

          <Box px={2} flex={1} className='animate__animated animate__zoomIn' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>

            <Avatar
              className='rotating-avatar'
              sx={{ borderRadius: 0, width: { xs: '100%', sm: '70%', md: '100%' }, height: '80%' }}
              src={ndole}
              alt='ndole'
            />

          </Box>


          <Box flex={1} className='animate__animated animate__slideInUp animate__fadeIn' display='flex' sx={{ flexDirection: { xs: 'column', sm: 'column', md: 'column' }, alignItems: { xs: 'center', sm: 'center', md: 'stretch' }, justifyContent: 'center' }}>
            <Typography
              variant='h6'
              mt={4}
              component='h2'
              sx={{
                fontFamily: 'var(--font-primary)',
                textAlign: { xs: 'center', sm: 'center', md: 'justify' },
                color: '#37373f',
                fontWeight: 700,
                fontSize: { xs: '30px', sm: '50px' }
              }}
            >
              Profitez de votre santé <br />
              Nourriture délicieuse
            </Typography>
            <Typography mt={4} variant='p' sx={{ px: { xs: '10px', md: '0' }, color: '#4f4f5a', textAlign: { xs: 'center', sm: 'center', md: 'justify' }, fontWeight: 400, lineHeight: '22px' }}>
              Plongez dans une expérience culinaire unique, où chaque plat raconte une histoire, chaque saveur évoque la chaleur du Cameroun. Chez nous, la fraîcheur des ingrédients rencontre la tradition pour créer des repas mémorables.
            </Typography>
            {/* <Stack direction='row' alignItems='center' mt={2}>
              <IconButton
                sx={{ color: '#ce1212' }}
              >
                <PlayCircleOutlined sx={{ fontSize: { xs: '35px', sm: '35px', md: '50px' } }} />
              </IconButton>
              <Typography variant='span'>Voir Video</Typography>
            </Stack> */}
          </Box>
        </Box>
   
      </Container>
    </Box>

  )
}

export default Hero
