import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Container, Stack, Tab, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';

const Menu = () => {
  const [value, setValue] = useState('1');
  const matches = useMediaQuery('(min-width:500px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
            >Notre menu</Typography>
            <Typography variant='p' sx={{ textTransform: 'uppercase', fontWeight: '400', fontFamily: 'var( --font-primary)', fontSize: '40px', textAlign: 'center' }}>
              Consultez notre délicieux menu
              <Typography variant='span' sx={{ color: '#ce1212' }}> Sur nous</Typography>
            </Typography>
          </Stack>

          <Box mt={4} sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, border: 'none' }}>
                <TabList 
                  onChange={handleChange} 
                  variant={matches ? 'standart' : 'scrollable'}
                  sx={{ "& .Mui-selected": { color: '#ce1212' }, "& .MuiTabs-indicator": { backgroundColor: '#ce1212' } }}
                  scrollButtons
                  centered= {matches ? true : false}
                  allowScrollButtonsMobile aria-label="lab API tabs example"
                >
                  <Tab label="Traditionnel" value="1" />
                  <Tab label="Grillades" value="2" />
                  <Tab label="Végétarien" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Typography sx={{textAlign: 'center', color: '#676775'}}>Menu</Typography>
                <Typography sx={{textAlign: 'center', color: '#ce1212', fontWeight: 600, fontSize: "36px"}}>Traditionnel</Typography>
              </TabPanel>
              <TabPanel value="2">
              <Typography sx={{textAlign: 'center', color: '#676775'}}>Menu</Typography>
                <Typography sx={{textAlign: 'center', color: '#ce1212', fontWeight: 600, fontSize: "36px"}}>Grillades</Typography>
              </TabPanel>
              <TabPanel value="3">
              <Typography sx={{textAlign: 'center', color: '#676775'}}>Menu</Typography>
                <Typography sx={{textAlign: 'center', color: '#ce1212', fontWeight: 600, fontSize: "36px"}}>Végétarien</Typography>
              </TabPanel>
            </TabContext>
          </Box>
        </>

      </Container>
    </Box>
  )
}

export default Menu
