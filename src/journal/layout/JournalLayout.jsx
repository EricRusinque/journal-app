import { Box } from '@mui/material';
import React from 'react'
import { NavBar, SideBar } from '../components';

const drawerWidth =  240;



export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex'}}>
        {/* Navbar */}
        <NavBar drawerWidth={ drawerWidth }/>


        {/* Sidebar */}
        <SideBar drawerWidth={ drawerWidth }/>
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, pt:10}}
        >
            { children }
        </Box>
    </Box>
  )
}
