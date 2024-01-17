import { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
  Avatar,
  IconButton,
  keyframes,
  Badge,
  Stack,
  Alert,
  ButtonGroup
} from "@mui/material";
import ndole from '../../assets/images/ndole.png';
import { Close, Delete, DeleteOutline, ShoppingCartOutlined } from "@mui/icons-material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from "react-redux";
import { supprimer } from "../../redux/reducers/rootReducer";


const DrawerPanier = ({ panier }) => {

  const[value, setValue] = useState(0);
  const panierDatas = useSelector((state) => state.petitePygmee.pannier);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    left: false,
  });

  

  const matches = useMediaQuery("(max-width:768px)");
 




  const toggleDrawer = (anchor, open) => (event) => {

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : matches ? '100vw' : '40vw', color: "#7f7f90", background: 'rgba(255, 255, 255, 0.9)', height: '100vh' }}
      role="presentation"

    >

      <Box
        bgcolor="white"
        color="black"
        zIndex={5}
        position="sticky"
        top={0}
        p={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: "12px 10px 12px 10px",
          borderBottom: '1px solid rgba(0, 0, 0, 0.12);'
        }}
      >
        <Stack direction='column' spacing={0}>
          <Typography variant="h6" sx={{ fontSize: '23px' }}>
            Shop cart
          </Typography>
          <Typography variant="small" sx={{ fontSize: '12px', color: '#5c6c75' }}>
            Location in 2938263
          </Typography>
        </Stack>

        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(anchor, false)}
        >
          <Close sx={{ color: '#37373f', fontSize: '30px' }} />
        </IconButton >
      </Box>

      <Stack
        sx={{
          padding: "15px 10px 12px 10px",
        }}
      >
        <Alert variant="filled" icon={false} sx={{ backgroundColor: '#f1acac', color: '#581313', fontSize: '13px' }} severity="error">
          Vous bénéficiez de la livraison GRATUITE. Commencez à payer maintenant !
        </Alert>
        <Divider sx={{ paddingTop: '15px' }} />
      </Stack>


      {

       panierDatas.length > 0 ? ( panierDatas.map((i, index) => {
          return (
            <Box key={index} sx={{
              width: '100%'
            }}>
              <Stack sx={{ padding: '0 20px' }} direction='row' display='flex' justifyContent='space-between'>
                <Stack direction='row' justifyContent='center' alignItems='center'>
                  <img src={i.image} width='70px' alt='aliment' />
                  <Stack ml={3} spacing={1}>
                    <Typography variant='h6' sx={{ color: 'black', fontSize: '14px' }}>{i.aliment}</Typography>
                    <IconButton onClick={()=>dispatch(supprimer(`${i.aliment}`))} sx={{ p: 0, '&:hover': { backgroundColor: 'transparent' } }}>
                      <DeleteOutline sx={{ fontSize: '18px', mr: 1, color: 'red' }} /><span style={{ fontSize: '12px' }}>Supprimer</span>
                    </IconButton>
                  </Stack>
                </Stack>
                <Stack direction='row' gap={5} justifyContent='center' alignItems='center'>
                  <Typography variant='h6' sx={{ color: 'black', fontSize: '14px' }}>{i.prix} FRCFA</Typography>
                </Stack>

              </Stack>
              <Stack mt={2} display='flex' alignItems='center' justifyContent='center'>
                <ButtonGroup size='small' variant="outlined" aria-label="outlined button group">
                  <Button>+</Button>
                  <input type='number' value={i.quantite} readOnly style={{ width: '50px', textAlign: 'center', border: '1px solid rgba(25, 118, 210, 0.5)' }} />
                  <Button>-</Button>
                </ButtonGroup>
              </Stack>
              <Divider sx={{ mt: 3, mb: 3 }} />
            </Box>
          )
        })

        ):(
          <p style={{textAlign: 'center'}}>Aucun produit</p>
        )

      }




    </Box>
  );

  return (
    <Box>
      <Button sx={{ color: 'white', '&:hover': { backgroundColor: 'transparent' } }} onClick={toggleDrawer('right', true)} >
        <Badge
          badgeContent={panier ? panier : 0}
          color="error"
        >
          <ShoppingCartOutlined sx={{ color: 'black' }} />
        </Badge>
      </Button>
      <Drawer
        anchor='right'
        open={state['right']}
        onClose={toggleDrawer('right', false)}

      >
        {list('right')}
      </Drawer>
    </Box>
  )
}

export default DrawerPanier
