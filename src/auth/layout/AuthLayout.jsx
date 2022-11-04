import { Grid, Typography } from '@mui/material'
import React from 'react'

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid 
    spacing={ 0 } 
    container
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
  >
    <Grid item
      className='box-shadow'
      xs={ 3 }
      sx={{ 
            width:{ sm: 450 },
            backgroundColor: 'white', 
            padding: 3, 
            borderRadius: 2 
        }}
    >
        <Typography variant='h4' sx={{ mb: 1 }}> { title } </Typography>
        
            { children }

        </Grid>
    </Grid>
  )
}
