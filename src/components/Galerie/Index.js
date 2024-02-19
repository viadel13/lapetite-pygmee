import { Avatar, Box, Container, Skeleton, Stack, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import gal1 from '../../assets/images/gal1.jpeg'
import gal2 from '../../assets/images/gal2.jpeg'
import gal3 from '../../assets/images/gal2.jpeg'
import gal4 from '../../assets/images/gal4.jpeg'
import gal5 from '../../assets/images/gal5.jpeg'
import gal6 from '../../assets/images/gal6.jpeg'
import gal7   from '../../assets/images/gal7.jpeg'
import gal8 from '../../assets/images/gal8.jpeg'
import gal9 from '../../assets/images/gal9.jpeg'
import gal10 from '../../assets/images/gal10.jpeg'
import gal11 from '../../assets/images/gal11.jpeg'
import gal12 from '../../assets/images/gal12.jpeg'
import gal13 from '../../assets/images/gal13.jpeg'
import gal14 from '../../assets/images/gal14.jpeg'
import gal15 from '../../assets/images/gal15.jpeg'
import gal16 from '../../assets/images/gal16.jpeg'
import gal17 from '../../assets/images/gal17.jpeg'
import useMediaQuery from '@mui/material/useMediaQuery';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import LightGallery from 'lightgallery/react/Lightgallery.es5';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-share.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { useState } from 'react';

const Galerie = () => {
  const matchesMD = useMediaQuery('(min-width: 600px)');
  const matchesLG = useMediaQuery('(min-width: 1024px)');
  const [imageLoaded, setImageLoaded] = useState(false);

  const images = [
    { src: gal1, alt: 'gal1' },
    { src: gal2, alt: 'gal2' },
    { src: gal3, alt: 'gal2' },
    { src: gal4, alt: 'gal4' },
    { src: gal5, alt: 'gal5' },
    { src: gal6, alt: 'gal5' },
    { src: gal7, alt: 'gal6' },
    { src: gal8, alt: 'gal6' },
    { src: gal9, alt: 'gal6' },
    { src: gal10, alt: 'gal6' },
    { src: gal11, alt: 'gal6' },
    { src: gal12, alt: 'gal6' },
    { src: gal13, alt: 'gal6' },
    { src: gal14, alt: 'gal6' },
    { src: gal15, alt: 'gal6' },
    { src: gal16, alt: 'gal6' },
    { src: gal17, alt: 'gal6' },
  ];

  const handleImageLoad = () => {
    setImageLoaded(true);
  }
  return (
    <Box bgcolor='#eee' minHeight='100vh'>
      <Container disableGutters sx={{ maxWidth: { xs: 'xs', sm: 'md', md: 'xs', lg: 'lg', xl: 'xs' } }}>
        <>
          <Stack pt={4} spacing={2} justifyContent='center' alignItems='center'>
            <Typography
              variant='h6'
              component='h2'
              sx={{
                color: '#7f7f90',
                fontWeight: 400,
                letterSpacing: '1px',
                fontSize: '13px',
              }}
            >Galerie</Typography>
            <Typography variant='p' sx={{ textTransform: 'uppercase', fontWeight: '400', fontFamily: 'var( --font-primary)', fontSize: '40px', textAlign: 'center' }}>
              consultez
              <Typography variant='span' sx={{ color: '#ce1212' }}>  notre galerie</Typography>
            </Typography>
          </Stack>
          <Box mt={4} px='4%'>
            <Swiper
              slidesPerView={
                matchesLG ? 4 : (matchesMD ? 3 : 1)

              }
              spaceBetween={18}
              pagination={{
                clickable: true,
                el: '.custom-swiper-pagination', // Ajoutez la classe personnalisée ici
                renderBullet: function (index, className) {
                  return `<span class="${className}"></span>`;
                },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              autoplay={{ delay: 2500, disableOnInteraction: false }} // Ajoutez cette option pour activer le défilement automatique
            >

              {
                images.map((i, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                      >
                        <a href={i.src}>
                          <Skeleton
                            sx={{ bgcolor: 'grey.900',display: imageLoaded ? 'none' : 'block'}}
                            variant="rectangular"
                            width='100%'
                            height="30vh"
                          />
                          <Avatar
                            sx={{
                              borderRadius: 0,
                              width: '100%',
                              height: '30vh',
                              objectFit: 'cover',
                              display: imageLoaded ? 'block' : 'none'
                            }}
                            src={i.src} alt={i.alt}
                            onLoad={handleImageLoad}
                          />
                        </a>
                      </LightGallery>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
            <div className="custom-swiper-pagination  custom-pagination-position"></div>
          </Box>
        </>
      </Container>
    </Box>
  )
}

export default Galerie
