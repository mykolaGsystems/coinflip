import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import Logo from "../img/s_logo.png"
import { ConnectButton } from "@mysten/wallet-kit";
import AccountWallet from "../wallet-adapter/AccountWallet";
import ConnectWallet from "../wallet-adapter/ConnectWallet"

const useStyles = makeStyles({
  nav: {
    background: 'linear-gradient(45deg, #255f77 35%, #9bcde0 80%)',
    // background: 'linear-gradient(45deg, #21CBF3 30%, #9bcde 80%)',
    color: 'white',
    height: "80px",
    display: "flex",
    justifyContent: "center",
  },
});
function NavigationBar() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        className={classes.nav}
        // elevation={1}
        // sx={{ boxShadow: 3 }}
      >
        <Toolbar>
          <Box
              component="img"
              display="flex"
              sx={{
                
                maxWidth: 55,
                marginRight: 2.5,
                marginBottom: 0.5,
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
              }}
              alt="The house from the offer."
              src={Logo}
            />
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              LootRyders LootBoxes 
            </Typography>
            <AccountWallet/>
        </Toolbar>
      </AppBar>
    </Box>
  );
  
}
export default NavigationBar;