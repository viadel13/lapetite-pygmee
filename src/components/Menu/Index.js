import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Avatar, Box, Button, Container, Divider, Grid, Paper, Skeleton, Stack, Tab, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ndole from '../../assets/images/ndole.png';
import pistage from '../../assets/images/pistage.jpg';
import kok from '../../assets/images/kok.jpeg';
import taro from '../../assets/images/taro.jpeg';
import grillade1 from '../../assets/images/grillade1.jpg';
import grillade2 from '../../assets/images/grillade2.jpeg';
import grilladeCanard from '../../assets/images/grilladeCanard.jpg';
import grilladePorc from '../../assets/images/grilladePorc.jpg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { menuDatas } from '../../datas'

const Menu = () => {
  const [value, setValue] = useState('1');
  const matches = useMediaQuery('(min-width:500px)');
  const navigate = useNavigate();
  console.log(menuDatas);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNavigate = (link, index) => {
    navigate(`/menu/${link}`, { state: menuDatas[index] });
  }

  return (
    <Box mb={4}>
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
                  variant={matches ? 'standard' : 'scrollable'}
                  sx={{ "& .Mui-selected": { color: 'red' }, "& .MuiTabs-indicator": { backgroundColor: '#ce1212' }, mb: 2 }}
                  scrollButtons
                  centered={matches ? true : false}
                  allowScrollButtonsMobile aria-label="lab API tabs example"
                >
                  <Tab label="Traditionnel" value="1" />
                  <Tab label="Grillades" value="2" />
                </TabList>
              </Box>

              <TabPanel value="1" sx={{ p: { xs: 1, sm: 1, md: 0 } }}>
                <Typography sx={{ textAlign: 'center', color: '#676775' }}>Menu</Typography>
                <Typography sx={{ textAlign: 'center', color: '#ce1212', fontWeight: 600, fontSize: "36px" }}>Traditionnel</Typography>
                <div className='animate__animated animate__fadeIn' >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                      <Box mt={4} >
                        <Stack spacing={2}>
                          <Paper onClick={(e) => {
                            e.stopPropagation();
                            handleNavigate('ndole', 0);
                          }}
                            elevation={0} sx={{ width: '100%', display: 'flex', p: '25px 8px', boxShadow: '0px 4px 4px rgba(33, 33, 33, 0.1)', cursor: 'pointer', "&:hover": { border: '1px solid red' } }} >
                            <Avatar src={ndole} sx={{ borderRadius: 0, width: '100px', height: '90px' }} alt='ndole' />
                            <Box width='100%' pl={2} display='flex' flexDirection='column'>
                              <Stack direction='column'>
                                <Stack pb={1} direction='row' alignItems='center' spacing={3} display='flex'>
                                  <Typography variant='h6' fontSize={18}>Ndole</Typography>
                                  <Typography variant='h6' fontSize={{ xs: 15, sm: 15, md: 18 }} sx={{ color: '#ce1212' }} fontWeight={400}>2000 FRCFA</Typography>
                                </Stack>
                                <Divider />
                                <Stack pt={1} spacing={1} direction='column' alignItems='flex-start' display='flex'>
                                  <Typography sx={{ color: '#676775', fontStyle: 'italic' }}>Ndolet au plantin mur avec crevete</Typography>
                                  <Button onClick={(e) => {
                                    e.stopPropagation();
                                    console.log('ndole');
                                  }} size='small' variant='contained'>Ajouter</Button>
                                </Stack>
                              </Stack>
                            </Box>
                          </Paper>
                          <Paper onClick={(e) => {
                            e.stopPropagation();
                            handleNavigate('pistache', 2);
                          }} elevation={0} sx={{ width: '100%', display: 'flex', p: '25px 8px', boxShadow: '0px 4px 4px rgba(33, 33, 33, 0.1)', "&:hover": { border: '1px solid red' }, cursor: 'pointer' }} >
                            <Avatar src={pistage} sx={{ borderRadius: 0, width: '100px', height: '90px' }} alt='ndole' />
                            <Box width='100%' pl={2} display='flex' flexDirection='column'>
                              <Stack direction='column'>
                                <Stack pb={1} direction='row' alignItems='center' spacing={3} display='flex'>
                                  <Typography variant='h6' fontSize={18}>le mai de pistache</Typography>
                                  <Typography variant='h6' fontSize={{ xs: 15, sm: 15, md: 18 }} sx={{ color: '#ce1212' }} fontWeight={400}>2500 FRCFA</Typography>
                                </Stack>
                                <Divider />
                                <Stack pt={1} spacing={1} direction='column' alignItems='flex-start' display='flex'>
                                  <Typography sx={{ color: '#676775', fontStyle: 'italic' }}>mai de pistache avec baton de manioc</Typography>
                                  <Button size='small' variant='contained'>Ajouter</Button>
                                </Stack>
                              </Stack>
                            </Box>
                          </Paper>
                        </Stack>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <Box mt={4}>
                        <Stack spacing={2}>
                          <Paper onClick={(e) => {
                            e.stopPropagation();
                            handleNavigate('okok', 1);
                          }} elevation={0} sx={{ width: '100%', display: 'flex', p: '25px 8px', boxShadow: '0px 4px 4px rgba(33, 33, 33, 0.1)', "&:hover": { border: '1px solid red' }, cursor: 'pointer' }} >
                            <Avatar src={kok} sx={{ borderRadius: 0, width: '100px', height: '90px' }} alt='ndole' />
                            <Box width='100%' pl={2} display='flex' flexDirection='column'>
                              <Stack direction='column'>
                                <Stack pb={1} direction='row' alignItems='center' spacing={3} display='flex'>
                                  <Typography variant='h6' fontSize={18}>l'Okok</Typography>
                                  <Typography variant='h6' fontSize={{ xs: 15, sm: 15, md: 18 }} sx={{ color: '#ce1212' }} fontWeight={400}>4000 FRCFA</Typography>
                                </Stack>
                                <Divider />
                                <Stack pt={1} spacing={1} direction='column' alignItems='flex-start' display='flex'>
                                  <Typography sx={{ color: '#676775', fontStyle: 'italic' }}>l'Okok avec baton de manioc</Typography>
                                  <Button size='small' variant='contained'>Ajouter</Button>
                                </Stack>
                              </Stack>
                            </Box>
                          </Paper>
                          <Paper onClick={(e) => {
                            e.stopPropagation();
                            handleNavigate('taro', 3);
                          }} elevation={0} sx={{ width: '100%', display: 'flex', p: '25px 8px', boxShadow: '0px 4px 4px rgba(33, 33, 33, 0.1)', "&:hover": { border: '1px solid red' }, cursor: 'pointer' }} >
                            <Avatar src={taro} sx={{ borderRadius: 0, width: '100px', height: '90px' }} alt='ndole' />
                            <Box width='100%' pl={2} display='flex' flexDirection='column'>
                              <Stack direction='column'>
                                <Stack pb={1} direction='row' alignItems='center' spacing={3} display='flex'>
                                  <Typography variant='h6' fontSize={18}>Taro</Typography>
                                  <Typography variant='h6' fontSize={{ xs: 15, sm: 15, md: 18 }} sx={{ color: '#ce1212' }} fontWeight={400}>3500 FRCFA</Typography>
                                </Stack>
                                <Divider />
                                <Stack pt={1} spacing={1} direction='column' alignItems='flex-start' display='flex'>
                                  <Typography sx={{ color: '#676775', fontStyle: 'italic' }}>Taro avec peau</Typography>
                                  <Button size='small' variant='contained'>Ajouter</Button>
                                </Stack>
                              </Stack>
                            </Box>
                          </Paper>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                </div>
              </TabPanel>

              <TabPanel value="2" sx={{ p: { xs: 1, sm: 1, md: 0 } }}>
                <Typography sx={{ textAlign: 'center', color: '#676775' }}>Menu</Typography>
                <Typography sx={{ textAlign: 'center', color: '#ce1212', fontWeight: 600, fontSize: "36px" }}>Grillades</Typography>
                <div className='animate__animated animate__fadeIn' >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                      <Box mt={4} >
                        <Stack spacing={2}>
                          <Paper onClick={(e) => {
                            e.stopPropagation();
                            handleNavigate('Viande', 4);
                          }} elevation={0} sx={{ width: '100%', display: 'flex', p: '25px 8px', boxShadow: '0px 4px 4px rgba(33, 33, 33, 0.1)', "&:hover": { border: '1px solid red' }, cursor: 'pointer' }} >
                            <Avatar src={grillade1} sx={{ borderRadius: 0, width: '100px', height: '90px' }} alt='ndole' />
                            <Box width='100%' pl={2} display='flex' flexDirection='column'>
                              <Stack direction='column'>
                                <Stack pb={1} direction='row' alignItems='center' spacing={3} display='flex'>
                                  <Typography variant='h6' fontSize={18}>Viande</Typography>
                                  <Typography variant='h6' fontSize={{ xs: 15, sm: 15, md: 18 }} sx={{ color: '#ce1212' }} fontWeight={400}>2000 FRCFA</Typography>
                                </Stack>
                                <Divider />
                                <Stack pt={1} spacing={1} direction='column' alignItems='flex-start' display='flex'>
                                  <Typography sx={{ color: '#676775', fontStyle: 'italic' }}>Grillade a la viande</Typography>
                                  <Button size='small' variant='contained'>Ajouter</Button>
                                </Stack>
                              </Stack>
                            </Box>
                          </Paper>
                          <Paper onClick={(e) => {
                            e.stopPropagation();
                            handleNavigate('poulet', 6);
                          }} elevation={0} sx={{ width: '100%', display: 'flex', p: '25px 8px', boxShadow: '0px 4px 4px rgba(33, 33, 33, 0.1)', "&:hover": { border: '1px solid red' }, cursor: 'pointer' }} >
                            <Avatar src={grillade2} sx={{ borderRadius: 0, width: '100px', height: '90px' }} alt='ndole' />
                            <Box width='100%' pl={2} display='flex' flexDirection='column'>
                              <Stack direction='column'>
                                <Stack pb={1} direction='row' alignItems='center' spacing={3} display='flex'>
                                  <Typography variant='h6' fontSize={18}>Poulet</Typography>
                                  <Typography variant='h6' fontSize={{ xs: 15, sm: 15, md: 18 }} sx={{ color: '#ce1212' }} fontWeight={400}>1000 FRCFA</Typography>
                                </Stack>
                                <Divider />
                                <Stack pt={1} spacing={1} direction='column' alignItems='flex-start' display='flex'>
                                  <Typography sx={{ color: '#676775', fontStyle: 'italic' }}>grillade au poulet</Typography>
                                  <Button size='small' variant='contained'>Ajouter</Button>
                                </Stack>
                              </Stack>
                            </Box>
                          </Paper>
                        </Stack>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <Box mt={4} >
                        <Stack spacing={2}>
                          <Paper onClick={(e) => {
                            e.stopPropagation();
                            handleNavigate('canard', 5);
                          }} elevation={0} sx={{ width: '100%', display: 'flex', p: '25px 8px', boxShadow: '0px 4px 4px rgba(33, 33, 33, 0.1)', "&:hover": { border: '1px solid red' }, cursor: 'pointer' }} >
                            <Avatar src={grilladeCanard} sx={{ borderRadius: 0, width: '100px', height: '90px' }} alt='ndole' />
                            <Box width='100%' pl={2} display='flex' flexDirection='column'>
                              <Stack direction='column'>
                                <Stack pb={1} direction='row' alignItems='center' spacing={3} display='flex'>
                                  <Typography variant='h6' fontSize={18}>Canard</Typography>
                                  <Typography variant='h6' fontSize={{ xs: 15, sm: 15, md: 18 }} sx={{ color: '#ce1212' }} fontWeight={400}>1500 FRCFA</Typography>
                                </Stack>
                                <Divider />
                                <Stack pt={1} spacing={1} direction='column' alignItems='flex-start' display='flex'>
                                  <Typography sx={{ color: '#676775', fontStyle: 'italic' }}>Grillade au canard</Typography>
                                  <Button size='small' variant='contained'>Ajouter</Button>
                                </Stack>
                              </Stack>
                            </Box>
                          </Paper>
                          <Paper onClick={(e) => {
                            e.stopPropagation();
                            handleNavigate('porc', 7);
                          }} elevation={0} sx={{ width: '100%', display: 'flex', p: '25px 8px', boxShadow: '0px 4px 4px rgba(33, 33, 33, 0.1)', "&:hover": { border: '1px solid red' }, cursor: 'pointer' }} >
                            <Avatar src={grilladePorc} sx={{ borderRadius: 0, width: '100px', height: '90px' }} alt='ndole' />
                            <Box width='100%' pl={2} display='flex' flexDirection='column'>
                              <Stack direction='column'>
                                <Stack pb={1} direction='row' alignItems='center' spacing={3} display='flex'>
                                  <Typography variant='h6' fontSize={18}>Porc</Typography>
                                  <Typography variant='h6' fontSize={{ xs: 15, sm: 15, md: 18 }} sx={{ color: '#ce1212' }} fontWeight={400}>3000 FRCFA</Typography>
                                </Stack>
                                <Divider />
                                <Stack pt={1} spacing={1} direction='column' alignItems='flex-start' display='flex'>
                                  <Typography sx={{ color: '#676775', fontStyle: 'italic' }}>Grillade au porc</Typography>
                                  <Button size='small' variant='contained'>Ajouter</Button>
                                </Stack>
                              </Stack>
                            </Box>
                          </Paper>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                </div>
              </TabPanel>
              {/* <TabPanel value="3" sx={{ p: { xs: 1, sm: 1, md: 0 } }}>
                <Typography sx={{ textAlign: 'center', color: '#676775' }}>Menu</Typography>
                <Typography sx={{ textAlign: 'center', color: '#ce1212', fontWeight: 600, fontSize: "36px" }}>Végétarien</Typography>
                <div className='animate__animated animate__fadeIn' >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                      <Box mt={4} >
                        <Stack spacing={2}>
                          <Paper elevation={0} sx={{ width: '100%', display: 'flex', p: '25px 8px', boxShadow: '0px 4px 4px rgba(33, 33, 33, 0.1)', }} >
                            <Avatar src={ndole} sx={{ borderRadius: 0, width: '100px', height: '90px' }} alt='ndole' />
                            <Box width='100%' pl={2} display='flex' flexDirection='column'>
                              <Stack direction='column'>
                                <Stack pb={1} direction='row' alignItems='center' spacing={3} display='flex'>
                                  <Typography variant='h6' fontSize={18}>Ndole</Typography>
                                  <Typography variant='h6' fontSize={{ xs: 15, sm: 15, md: 18 }} sx={{ color: '#ce1212' }} fontWeight={400}>2000 FRCFA</Typography>
                                </Stack>
                                <Divider />
                                <Stack pt={1} spacing={1} direction='column' alignItems='flex-start' display='flex'>
                                  <Typography sx={{ color: '#676775', fontStyle: 'italic' }}>Ndolet au plantin mur avec crevete</Typography>
                                  <Button size='small' variant='contained'>Ajouter</Button>
                                </Stack>
                              </Stack>
                            </Box>
                          </Paper>
                          <Paper elevation={0} sx={{ width: '100%', display: 'flex', p: '25px 8px', boxShadow: '0px 4px 4px rgba(33, 33, 33, 0.1)', }} >
                            <Avatar src={ndole} sx={{ borderRadius: 0, width: '100px', height: '90px' }} alt='ndole' />
                            <Box width='100%' pl={2} display='flex' flexDirection='column'>
                              <Stack direction='column'>
                                <Stack pb={1} direction='row' alignItems='center' spacing={3} display='flex'>
                                  <Typography variant='h6' fontSize={18}>Ndole</Typography>
                                  <Typography variant='h6' fontSize={{ xs: 15, sm: 15, md: 18 }} sx={{ color: '#ce1212' }} fontWeight={400}>2000 FRCFA</Typography>
                                </Stack>
                                <Divider />
                                <Stack pt={1} spacing={1} direction='column' alignItems='flex-start' display='flex'>
                                  <Typography sx={{ color: '#676775', fontStyle: 'italic' }}>Ndolet au plantin mur avec crevete</Typography>
                                  <Button size='small' variant='contained'>Ajouter</Button>
                                </Stack>
                              </Stack>
                            </Box>
                          </Paper>
                        </Stack>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <Box mt={4} >
                        <Stack spacing={2}>
                          <Paper elevation={0} sx={{ width: '100%', display: 'flex', p: '25px 8px', boxShadow: '0px 4px 4px rgba(33, 33, 33, 0.1)', }} >
                            <Avatar src={ndole} sx={{ borderRadius: 0, width: '100px', height: '90px' }} alt='ndole' />
                            <Box width='100%' pl={2} display='flex' flexDirection='column'>
                              <Stack direction='column'>
                                <Stack pb={1} direction='row' alignItems='center' spacing={3} display='flex'>
                                  <Typography variant='h6' fontSize={18}>Ndole</Typography>
                                  <Typography variant='h6' fontSize={{ xs: 15, sm: 15, md: 18 }} sx={{ color: '#ce1212' }} fontWeight={400}>2000 FRCFA</Typography>
                                </Stack>
                                <Divider />
                                <Stack pt={1} spacing={1} direction='column' alignItems='flex-start' display='flex'>
                                  <Typography sx={{ color: '#676775', fontStyle: 'italic' }}>Ndolet au plantin mur avec crevete</Typography>
                                  <Button size='small' variant='contained'>Ajouter</Button>
                                </Stack>
                              </Stack>
                            </Box>
                          </Paper>
                          <Paper elevation={0} sx={{ width: '100%', display: 'flex', p: '25px 8px', boxShadow: '0px 4px 4px rgba(33, 33, 33, 0.1)', }} >
                            <Avatar src={ndole} sx={{ borderRadius: 0, width: '100px', height: '90px' }} alt='ndole' />
                            <Box width='100%' pl={2} display='flex' flexDirection='column'>
                              <Stack direction='column'>
                                <Stack pb={1} direction='row' alignItems='center' spacing={3} display='flex'>
                                  <Typography variant='h6' fontSize={18}>Ndole</Typography>
                                  <Typography variant='h6' fontSize={{ xs: 15, sm: 15, md: 18 }} sx={{ color: '#ce1212' }} fontWeight={400}>2000 FRCFA</Typography>
                                </Stack>
                                <Divider />
                                <Stack pt={1} spacing={1} direction='column' alignItems='flex-start' display='flex'>
                                  <Typography sx={{ color: '#676775', fontStyle: 'italic' }}>Ndolet au plantin mur avec crevete</Typography>
                                  <Button size='small' variant='contained'>Ajouter</Button>
                                </Stack>
                              </Stack>
                            </Box>
                          </Paper>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                </div>
              </TabPanel> */}
            </TabContext>
          </Box>
        </>

      </Container>
    </Box>
  )
}

export default Menu
