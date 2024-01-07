import { Box, Container } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar/Index'
import Hero from '../Hero/Index'
import { Outlet } from 'react-router-dom'

const Content = () => {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  )
}

export default Content
