import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

 const Header = () => {
  return (
    <AppBar sx={{background:'linear-gradient(90deg, rgba(105,58,180,1) 0%, rgba(253,29,77,1) 50%, rgba(69,228,252,1) 100%)'}}>
        <Toolbar>
            <Typography variant='h4'>
            BlogApp
            </Typography>
            <Box display="flex" marginLeft='auto'>
                <Button variant='contained' sx={{margin:1 , borderRadius:10}} color='warning'>Login</Button>
                <Button variant='contained' sx={{margin:1 ,borderRadius:10}}  color='warning'>Signup</Button>
            </Box>
        </Toolbar>
    </AppBar>
  )
}
 export default Header;