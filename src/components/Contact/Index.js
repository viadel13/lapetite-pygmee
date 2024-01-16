import { Call, ImportContacts, Mail, Share } from '@mui/icons-material'
import { Avatar, Box, Button, CircularProgress, Container, FormHelperText, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';


const Contact = () => {
  const [load, setLoad] = useState(false);
  const [loadIframe, setLoadIframe] = useState(false);

  const handleLoadIframe = () => {
    setLoadIframe(true);
  };

  const formik = useFormik({
    initialValues: {
      nom: "",
      email: "",
      sujet: "",
      messages: "",
    },
    onSubmit: (values) => {
      setLoad(true);
      setTimeout(() => {
        setLoad(false)
        formik.handleReset();
        toast.success("Message envoyé", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }, 4000);


    },
    validate: (values) => {
      const errors = {}
      if (!values.nom) {
        errors.nom = 'Champ requis !';
      }
      if (!values.email) {
        errors.email = 'Champ requis !';
      }

      if (!values.sujet) {
        errors.sujet = 'Champ requis !';
      }

      if (!values.messages) {
        errors.messages = 'Champ requis! ';
      }
      return errors
    }


  })

  return (
    <Box>
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
            >Contact</Typography>
            <Typography variant='p' sx={{ textTransform: 'uppercase', fontWeight: '400', fontFamily: 'var( --font-primary)', fontSize: '40px', textAlign: 'center' }}>
              besoin d'aide
              <Typography variant='span' sx={{ color: '#ce1212' }}> contactez-nous ?</Typography>
            </Typography>
          </Stack>
          <Box width="100%" mt={4} px={1}>
            {
              !loadIframe ? (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <CircularProgress sx={{color: '#ce1212'}} />
                </Box>
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.0636656294396!2d13.677537475709395!3d4.582591942668631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1092993e3d071ef7%3A0xe5314dff0a7b3870!2sRestaurant%20La%20Petite%20Pygm%C3%A9e!5e0!3m2!1sfr!2scm!4v1705312752906!5m2!1sfr!2scm"
                  width="100%"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen
                >
                </iframe>
              )

            }

            <Box visibility='hidden' position='absolute'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.0636656294396!2d13.677537475709395!3d4.582591942668631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1092993e3d071ef7%3A0xe5314dff0a7b3870!2sRestaurant%20La%20Petite%20Pygm%C3%A9e!5e0!3m2!1sfr!2scm!4v1705312752906!5m2!1sfr!2scm"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                onLoad={handleLoadIframe}
              >
              </iframe>
            </Box>


            <Stack mt={4}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={2}>
                    <Paper elevation={0} sx={{ bgcolor: '#f4f4f4', padding: '30px 20px', display: 'flex', alignItems: 'center', gap: '20px', height: '125px' }}>
                      <Avatar sx={{ bgcolor: '#ce1212', width: 56, height: 56 }}>
                        <ImportContacts sx={{ fontSize: '30px' }} />
                      </Avatar>
                      <Stack>
                        <Typography variant='h6' component='h3' sx={{ color: '#6c757d', fontWeight: 700, fontSize: '20px' }}>Adresse</Typography>
                        <Typography variant='p' sx={{ fontSize: '15px', lineHeight: '20px' }}>Restaurant La Petite Pygmée, Rue 876, Bertoua</Typography>
                      </Stack>
                    </Paper>
                    <Paper elevation={0} sx={{ bgcolor: '#f4f4f4', padding: '30px 20px', display: 'flex', alignItems: 'center', gap: '20px', height: '125px' }}>
                      <Avatar sx={{ bgcolor: '#ce1212', width: 56, height: 56 }}>
                        <Mail sx={{ fontSize: '30px' }} />
                      </Avatar>
                      <Stack>
                        <Typography variant='h6' component='h3' sx={{ color: '#6c757d', fontWeight: 700, fontSize: '20px' }}>Email</Typography>
                        <Typography variant='p' sx={{ fontSize: '15px', lineHeight: '20px' }}>petitepygmee@gmail.com</Typography>
                      </Stack>
                    </Paper>
                  </Stack>

                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={2}>
                    <Paper elevation={0} sx={{ bgcolor: '#f4f4f4', padding: '30px 20px', display: 'flex', alignItems: 'center', gap: '20px', height: '125px' }}>
                      <Avatar sx={{ bgcolor: '#ce1212', width: 56, height: 56 }}>
                        <Call sx={{ fontSize: '30px' }} />
                      </Avatar>
                      <Stack>
                        <Typography variant='h6' component='h3' sx={{ color: '#6c757d', fontWeight: 700, fontSize: '20px' }}>Telephone</Typography>
                        <Typography variant='p' sx={{ fontSize: '15px', lineHeight: '20px' }}>+237696746857</Typography>
                      </Stack>
                    </Paper>
                    <Paper elevation={0} sx={{ bgcolor: '#f4f4f4', padding: '30px 20px', display: 'flex', alignItems: 'center', gap: '20px', height: '125px' }}>
                      <Avatar sx={{ bgcolor: '#ce1212', width: 56, height: 56 }}>
                        <Share sx={{ fontSize: '30px' }} />
                      </Avatar>
                      <Stack>
                        <Typography variant='h6' component='h3' sx={{ color: '#6c757d', fontWeight: 700, fontSize: '20px' }}>Horaires d'ouvertures</Typography>
                        <Typography variant='p' sx={{ fontSize: '15px', lineHeight: '20px' }}><strong>Lundi-Samedi:</strong> 11h - 23h; <strong>Dimanche:</strong> Ferme </Typography>
                      </Stack>
                    </Paper>
                  </Stack>

                </Grid>
              </Grid>
              <Box
                onSubmit={formik.handleSubmit}
                component="form"
                noValidate
                autoComplete="off"
                display='flex'
                flexDirection='column'
                alignItems='center'
                gap={2}
                mt={4}
                justifyContent='center'
                sx={{
                  padding: '20px 15px',
                  boxShadow: '0 0 30px rgba(0, 0, 0, 0.08)'
                }}
              >
                <Stack width='100%' gap={2} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' } }}>

                  <div style={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      sx={{ backgroundColor: 'white' }}
                      name="nom"
                      error={formik.touched.nom && formik.errors.nom ? true : false}
                      onChange={formik.handleChange}
                      value={formik.values.nom}
                      placeholder="Nom"
                    />
                    {formik.touched.nom && formik.errors.nom && <FormHelperText sx={{ color: 'red' }}>{formik.errors.nom}</FormHelperText>}
                  </div>
                  <div style={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      sx={{ backgroundColor: 'white' }}
                      type='email'
                      error={formik.touched.email && formik.errors.email ? true : false}
                      name="email"
                      id='email'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      placeholder="Email"
                    />
                    {formik.touched.email && formik.errors.email && <FormHelperText sx={{ color: 'red' }}>{formik.errors.email}</FormHelperText>}
                  </div>

                </Stack>
                <div style={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: 'white' }}
                    type='text'
                    error={formik.touched.sujet && formik.errors.sujet ? true : false}
                    name="sujet"
                    id='sujet'
                    value={formik.values.sujet}
                    onChange={formik.handleChange}
                    placeholder="sujet"
                  />
                  {formik.touched.sujet && formik.errors.sujet && <FormHelperText sx={{ color: 'red' }}>{formik.errors.sujet}</FormHelperText>}
                </div>
                <div style={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    rows={5}
                    multiline
                    placeholder='Messages'
                    sx={{ background: 'white' }}
                    name="messages"
                    onChange={formik.handleChange}
                    value={formik.values.messages}
                    error={formik.touched.messages && formik.errors.messages ? true : false}
                  />
                  {formik.touched.messages && formik.errors.messages && <FormHelperText sx={{ color: 'red' }}>{formik.errors.messages}</FormHelperText>}
                </div>
                {
                  !load ? (
                    <Button
                      variant='contained'
                      disableElevation
                      type='submit'
                      sx={{
                        backgroundColor: '#ce1212',
                        padding: '8px 20px',
                        '&:hover': {
                          backgroundColor: '#ce1212',
                        }
                      }}
                    >Envoyer message
                    </Button>
                  )
                    : (
                      <LoadingButton
                        loading={true}
                        loadingPosition="center"
                        variant="contained"
                        sx={{ padding: '8px 20px' }}
                      >
                        <span>disabled</span>
                      </LoadingButton>
                    )
                }
              </Box>
            </Stack>

          </Box>

        </>
      </Container>
    </Box >
  )
}

export default Contact
