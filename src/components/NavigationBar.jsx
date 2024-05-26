
// <Box sx={{ flexGrow: 1,  mx: { xs: 0, md: '100px', lg: '250px', xl: '500px'} }}>

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import logo from "../img/logo.png";
import ConnectButton from '../wallet-adapter/ConnectButton';

const useStyles = makeStyles({
  nav: {
    background: '#1A2E46 !important',
    color: 'white',
    height: "80px",
    display: "flex",
    justifyContent: "center",
  },
});

function NavigationBar() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
      <AppBar 
        position="static" 
        className={classes.nav}
        sx={{ borderRadius: { xs: '0 0 14px 14px', md: '0 0 14px 14px' }, width: '500px' }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              sx={{
                maxWidth: 60,
                marginBottom: 0.5,
                borderRadius: 2,
                marginRight: 2,
              }}
              alt="Logo"
              src={logo}
            />
            <Typography variant="h5" component="div">
              Wojak Flip
            </Typography>
          </Box>
          <ConnectButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavigationBar;
