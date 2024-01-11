import { Avatar, Backdrop, Box, Button, CircularProgress, Container, FormHelperText, InputAdornment, OutlinedInput, Stack, TextField, Typography, styled } from '@mui/material';
import { DateField, TimeField } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import reserv from '../../assets/images/reservation.jpg'
import { useFormik } from "formik";
import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { toast } from "react-toastify";

const Reservation = () => {

  const [load, setLoad] = useState(false);
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    const imageFond = new Image();
    imageFond.src = reserv;

    const gestionnaireChargementImage = () => {
      setChargement(false);
    };

    imageFond.addEventListener('load', gestionnaireChargementImage);

    return () => {
      imageFond.removeEventListener('load', gestionnaireChargementImage);
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      nom: "",
      email: "",
      phone: "",
      nbrePersonne: "",
      messages: "",
      date: dayjs('2022-04-17'),
      time: dayjs('2022-04-17T15:30'),
    },
    onSubmit: (values) => {
      setLoad(true);
      setTimeout(() => {
        setLoad(false)
        formik.handleReset();
        toast.success("Reéservation envoyée", {
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
      if (!values.phone) {
        errors.phone = 'Champ requis !';
      } else if (!/^\d{9}$/.test(values.phone)) {
        errors.phone = 'Le numéro de téléphone doit contenir exactement 9 chiffres !';
      }

      if (!values.nbrePersonne) {
        errors.nbrePersonne = 'Champ requis !';
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
        {chargement

          ? (
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={chargement}
            // onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          )
          :
          (
            <>
              <Stack mt={3} mb={2} spacing={2} justifyContent='center' alignItems='center'>
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
              <Container>
                <Avatar src={reserv} alt='reservation' sx={{ borderRadius: 0, width: '100%', height: '60vh' }} />
                <Box
                  onSubmit={formik.handleSubmit}
                  component="form"
                  noValidate
                  autoComplete="off"
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  gap={3}
                  justifyContent='center'
                  sx={{
                    padding: '20px'
                  }}
                  bgcolor='#eee'
                >
                  <div style={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      sx={{ backgroundColor: 'white' }}
                      name="nom"
                      error={formik.touched.nom && formik.errors.nom ? true : false}
                      onBlur={formik.handleBlur}
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
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && formik.errors.email ? true : false}
                      name="email"
                      id='email'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      placeholder="Email"
                    />
                    {formik.touched.email && formik.errors.email && <FormHelperText sx={{ color: 'red' }}>{formik.errors.email}</FormHelperText>}

                  </div>
                  <div style={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      sx={{ backgroundColor: 'white' }}
                      type='number'
                      id="outlined-start-adornment"
                      name="phone"
                      error={formik.touched.phone && formik.errors.phone ? true : false}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      placeholder="Phone"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            +237
                          </InputAdornment>
                        ),
                      }}
                    />
                    {formik.touched.phone && formik.errors.phone && <FormHelperText sx={{ color: 'red' }}>{formik.errors.phone}</FormHelperText>}
                  </div>

                  <DateField
                    defaultValue={formik.values.time}
                    onChange={(date) => formik.setFieldValue('date', date)}
                    fullWidth sx={{ background: 'white' }}

                  />

                  <TimeField
                    defaultValue={formik.values.date}
                    onChange={(time) => formik.setFieldValue('time', time)}
                    fullWidth
                    sx={{ background: 'white' }}
                  />

                  <div style={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      sx={{ backgroundColor: 'white' }}
                      type='number'
                      name="nbrePersonne"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.nbrePersonne}
                      error={formik.touched.nbrePersonne && formik.errors.nbrePersonne ? true : false}
                      placeholder="Nombre de personnes"
                    />
                    {formik.touched.nbrePersonne && formik.errors.nbrePersonne && <FormHelperText sx={{ color: 'red' }}>{formik.errors.nbrePersonne}</FormHelperText>}
                  </div>

                  <div style={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      rows={5}
                      multiline
                      placeholder='Messages'
                      sx={{ background: 'white' }}
                      name="messages"
                      onBlur={formik.handleBlur}
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
                      >Reserver
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


              </Container>
            </>

          )
        }

      </Container>
    </Box>
  )
}

export default Reservation;
