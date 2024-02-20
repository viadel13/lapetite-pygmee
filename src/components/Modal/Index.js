import { Box, Button, FormHelperText, InputAdornment, Modal, Stack, TextField, Typography } from '@mui/material'
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';

const ModalEm = ({ setModal, openModal }) => {
  const [load, setLoad] = useState(false);

  function handleClose() {
    setModal(false)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const formik = useFormik({
    initialValues: {
      nom: "",
      numero: "",
      quantite: "",
      adresseLivraison: "",
    },
    onSubmit: (values) => {
      setLoad(true);
      setTimeout(() => {
        setLoad(false)
        formik.handleReset();
        setModal(false);
        toast.success("Commande envoyée", {
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

      if (!values.quantite) {
        errors.quantite = 'Champ requis !';
      }

      if (!values.numero) {
        errors.numero = 'Champ requis !';
      }

      if (!values.adresseLivraison) {
        errors.adresseLivraison = 'Champ requis !';
      }

      return errors
    }


  })

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            A EMPORTE
          </Typography>
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
                  type='number'
                  error={formik.touched.numero && formik.errors.numero ? true : false}
                  name="numero"
                  id='numero'
                  value={formik.values.numero}
                  onChange={formik.handleChange}
                  placeholder="Numero"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        +237
                      </InputAdornment>
                    ),
                  }}
                />
                {formik.touched.numero && formik.errors.numero && <FormHelperText sx={{ color: 'red' }}>{formik.errors.numero}</FormHelperText>}
              </div>

            </Stack>
            <div style={{ width: '100%' }}>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: 'white' }}
                  type='number'
                  name="quantite"
                  onChange={formik.handleChange}
                  value={formik.values.quantite}
                  error={formik.touched.quantite && formik.errors.quantite ? true : false}
                  placeholder="quantite"
                />
                {formik.touched.quantite && formik.errors.quantite && <FormHelperText sx={{ color: 'red' }}>{formik.errors.quantite}</FormHelperText>}
            </div>

            <div style={{ width: '100%' }}>
              <TextField
                fullWidth
                sx={{ backgroundColor: 'white' }}
                type='text'
                error={formik.touched.adresseLivraison && formik.errors.adresseLivraison ? true : false}
                name="adresseLivraison"
                id='adresseLivraison'
                value={formik.values.adresseLivraison}
                onChange={formik.handleChange}
                placeholder="Adresse Livraison"
              />
              {formik.touched.adresseLivraison && formik.errors.adresseLivraison && <FormHelperText sx={{ color: 'red' }}>{formik.errors.adresseLivraison}</FormHelperText>}
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
                >Commander
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
        </Box>
      </Modal>
    </div>
  )
}

export default ModalEm
