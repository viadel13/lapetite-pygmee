import { Box, Container } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar/Index'
import Hero from '../Hero/Index'
import { Outlet } from 'react-router-dom'

const Content = () => {
  return (
    <Box>
      <Navbar />
      <Box bgcolor='#eee'>
        <Container disableGutters sx={{ maxWidth: { xs: 'xs', sm: 'md', md: 'xs', lg: 'lg', xl: 'xs' } }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  )
}

export default Content
