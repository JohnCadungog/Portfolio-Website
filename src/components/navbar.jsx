import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';

import logo from '../assets/logojohn.png'; // Adjust the path according to your project structure

function Navbar() {
  return (
    <Box sx={{ marginTop: '40px', display: 'flex', justifyContent: 'center', minHeight: '20vh' }}>
      <AppBar position="static" sx={{ height: '100px', width: '70%', backgroundColor: '#F4F4F4', borderRadius: '40px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', border: '1px solid #C4C4C4', zIndex: 1000 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ width: '600px', mx: 'auto', display: 'flex', justifyContent: 'center', py: 2 }}>
            <Typography
              variant="h6"
              noWrap
             
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black', // Adjust text color if necessary
                textDecoration: 'none',
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="h6"
              noWrap
           
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Skills
            </Typography>
            <Typography
              variant="h6"
              noWrap
              
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Projects
            </Typography>
            <Typography
              variant="h6"
              noWrap
         
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Contacts
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;
