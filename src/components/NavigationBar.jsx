
// <Box sx={{ flexGrow: 1,  mx: { xs: 0, md: '100px', lg: '250px', xl: '500px'} }}>

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import logo from "../img/logo.png";
import ConnectButton from '../wallet-adapter/ConnectButton';
import { NearLogo } from '../utils/NearLogo';
import Divider from '@mui/material/Divider';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';
import { Button, Modal, Backdrop, Fade } from '@mui/material';

import SettingsIcon from '@mui/icons-material/Settings';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


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
  const [openDeposit, setOpenDeposit] = React.useState(false);
  const [openSettings, setOpenSettings] = React.useState(null);

  const handleDepositOpen = () => setOpenDeposit(true);
  const handleDepositClose = () => setOpenDeposit(false);
  const handleSettingsOpen = () => setOpenSettings(true);
  const handleSettingsClose = () => setOpenSettings(false);

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
      <AppBar 
        position="static" 
        className={classes.nav}
        sx={{ borderRadius: { xs: '0 0 14px 14px', md: '0 0 14px 14px' }, width: '700px' }}
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
              Flip.Bash
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
             <Divider 
                orientation="vertical" 
                variant="middle" 
                flexItem 
                sx={{ 
                  borderColor: '#063839', 
                  borderWidth: 1, 
                  marginLeft: 0.5, 
                  marginRight: 0.5, 
                  height: '44px' 
                }} 
              />

              <IconButton 
                size="medium" 
                disableRipple 
                className="MuiIcon-settings"
                onClick={handleSettingsOpen}
              >
                <SettingsIcon fontSize="large" />
              </IconButton>

              <Divider 
                orientation="vertical" 
                variant="middle" 
                flexItem 
                sx={{ 
                  borderColor: '#063839', 
                  borderWidth: 1, 
                  marginLeft: 0.5, 
                  marginRight: 1, 
                  height: '44px' 
                }} 
              />

              <Button 
                variant="text" 
                startIcon={<NearLogo />}
                className='MuiButton-deposit'
                disableRipple
                onClick={handleDepositOpen}
              >
                  17.99
              </Button>

              <IconButton 
                size="medium" 
                disableRipple 
                className="MuiIcon-deposit"
                onClick={handleDepositOpen}
              >
                <AddBoxIcon fontSize="large" />
              </IconButton>

            </Box>
            <Divider 
              orientation="vertical" 
              variant="middle" 
              flexItem 
              sx={{ 
                borderColor: '#063839', 
                borderWidth: 1, 
                marginLeft: 0.5, 
                marginRight: 2, 
                height: '44px' 
              }} 
            />
            <ConnectButton />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Modal for temporary window */}
      <Modal
        open={openDeposit}
        onClose={handleDepositClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
          sx: {
            backdropFilter: 'blur(2px)', // Add blur effect
            backgroundColor: 'rgba(9,17,26, 0.7)', // Semi-transparent background
          },
        }}
      >
        <Fade in={openDeposit}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 700,
            bgcolor: '#213A57',
            // border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}>
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              Temporary Window
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              This is a blank temporary window.
            </Typography> */}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default NavigationBar;

