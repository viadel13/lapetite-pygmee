import { Box, Button, Container, FormHelperText, InputAdornment, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from "formik";
import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { toast } from "react-toastify";
import dayjs from 'dayjs';
import { DateField } from '@mui/x-date-pickers';
import styled from '@emotion/styled';

const Service = () => {
  const [load, setLoad] = useState(false);
  const[value1, setValue1] = useState('')
  const[value2, setValue2] = useState('')

  const formik = useFormik({
    initialValues: {
      nom: "",
      email: "",
      phone: "",
      nbrePersonne: "",
      typeEvenevements: "",
      lieu: "",
      servicesSouhaite: "",
      date: dayjs('2022-04-17'),

    },
    onSubmit: (values) => {
      setLoad(true);
      setTimeout(() => {
        setLoad(false)
        formik.handleReset();
        toast.success("envoyée", {
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
      if (!values.typeEvenevements) {
        errors.typeEvenevements = 'Champ requis! ';
      }
      if (!values.lieu) {
        errors.lieu = 'Champ requis! ';
      }
      if (!values.servicesSouhaite) {
        errors.servicesSouhaite = 'Champ requis! ';
      }
      return errors
    }
  })

  const StyledSelect = styled(Select)(({ theme }) => ({
    backgroundColor: 'white',
    width: '100%',

  }));


  return (
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
        >Services</Typography>
        <Typography variant='p' sx={{ textTransform: 'uppercase', fontWeight: '400', fontFamily: 'var( --font-primary)', fontSize: '40px', textAlign: 'center' }}>
          Solicitez
          <Typography variant='span' sx={{ color: '#ce1212' }}> nos </Typography>
          services
        </Typography>
      </Stack>
      <Container disableGutters>
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
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} style={{ width: '100%' }}>
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
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} style={{ width: '100%' }}>
            <div style={{ width: '100%' }}>
              <TextField
                fullWidth
                sx={{ backgroundColor: 'white' }}
                type='number'
                id="outlined-start-adornment"
                name="phone"
                error={formik.touched.phone && formik.errors.phone ? true : false}
                onChange={formik.handleChange}
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
            <div style={{ width: '100%' }}>
              <TextField
                fullWidth
                sx={{ backgroundColor: 'white' }}
                type='number'
                name="nbrePersonne"
                onChange={formik.handleChange}
                value={formik.values.nbrePersonne}
                error={formik.touched.nbrePersonne && formik.errors.nbrePersonne ? true : false}
                placeholder="Nombre de personnes"
              />
              {formik.touched.nbrePersonne && formik.errors.nbrePersonne && <FormHelperText sx={{ color: 'red' }}>{formik.errors.nbrePersonne}</FormHelperText>}
            </div>
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} style={{ width: '100%' }}>
            <DateField
              defaultValue={formik.values.time}
              onChange={(date) => formik.setFieldValue('date', date)}
              fullWidth sx={{ background: 'white' }}
            />
            <div style={{ width: '100%' }}>
              <TextField
                fullWidth
                placeholder='lieu'
                sx={{ background: 'white' }}
                name="lieu"
                onChange={formik.handleChange}
                value={formik.values.lieu}
                error={formik.touched.lieu && formik.errors.lieu ? true : false}
              />
              {formik.touched.lieu && formik.errors.lieu && <FormHelperText sx={{ color: 'red' }}>{formik.errors.lieu}</FormHelperText>}
            </div>
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} style={{ width: '100%' }}>
            <div style={{ width: '100%' }}>
              <StyledSelect
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                size='small'
                value={formik.values.typeEvenevements}
                onChange={formik.handleChange}
                name="typeEvenevements"
                error={formik.touched.typeEvenevements && formik.errors.typeEvenevements ? true : false}
              >
                <MenuItem value="">
                  <>Type d'evenement</>
                </MenuItem>
                <MenuItem value='Anniversaire'>Anniversaire</MenuItem>
                <MenuItem value='Mariage'>Mariage</MenuItem>
                <MenuItem value='Reception'>Reception</MenuItem>
              </StyledSelect>
              {formik.touched.typeEvenevements && formik.errors.typeEvenevements && <FormHelperText sx={{ color: 'red' }}>{formik.errors.typeEvenevements}</FormHelperText>}
            </div>
            <div style={{ width: '100%' }}>
              <StyledSelect
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                size='small'
                value={formik.values.servicesSouhaite}
                onChange={formik.handleChange}
                name="servicesSouhaite"
                error={formik.touched.servicesSouhaite && formik.errors.servicesSouhaite ? true : false}
              >
                <MenuItem value="">
                  <>Services souhaites</>
                </MenuItem>
                <MenuItem value='Decoration'>Decoration</MenuItem>
                <MenuItem value='Restauration'>Restauration</MenuItem>
                <MenuItem value='Service traiteur'>Service traiteur</MenuItem>
              </StyledSelect>
              {formik.touched.servicesSouhaite && formik.errors.servicesSouhaite && <FormHelperText sx={{ color: 'red' }}>{formik.errors.servicesSouhaite}</FormHelperText>}
            </div>
          </Stack>
          <>

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
                >Envoye
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
          </>
        </Box>
      </Container>

    </>
  )
}

export default Service
