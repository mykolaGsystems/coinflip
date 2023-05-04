import { useWalletKit, WalletKitContext } from "@mysten/wallet-kit"

import { useState, useSyncExternalStore, useContext, useEffect,useRef } from 'react';
import { Box, setTheme, Typography, useTheme} from "@mui/material";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {SuiIcon} from "../utils/icons.tsx"


const ConnectWallet = () =>  {
  const { connect, currentWallet, isConnected, wallets} = useWalletKit();
//   const theme = useTheme();
  // const colorMode = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);

  const notify = () => {
    toast.success('Wallet Connected!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
    });
}

  // const useStyles = makeStyles(() => ({
  //   paper: { minWidth: "500px" },
  // }));

    // useEffect(() => {
    //   // window.sessionStorage.activeSession = JSON.stringify(accountSession)
    //   // // localStorage.setItem('session', JSON.stringify(accountSession));
    //   // window.sessionStorage.sessionAccount = z
    //   // console.log('%cConnect Wallet', 'background: black; color: white', JSON.parse(window.sessionStorage.activeSession))
    //   // console.log("ConnectWallet",window.activeSession) 
    // },[]);
  
  

  // console.log()

  
  function login (walletName) {
    connect(walletName)
    // window.sessionStorage.activeSession = JSON.stringify(accountSession)
    // window.sessionStorage.sessionAccount = z
    notify()
    handleClose()
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button 
          variant="contained" 
          onClick={handleClickOpen} 
          size="large"
          style={{
            backgroundColor: "#255f77"
            // color: "#4f5e6b"
            // color: colors.primary[100],
            // borderColor: colors.primary[100]
          }} 
      >
        Connect Wallet
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "400px",  // Set your width here
              borderRadius: '12px',
              backgroundColor: "#657888"
            },
          },
        }}

      >
        <DialogTitle id="alert-dialog-title" 
        sx = {{ ml:2, mt:-1, mb:-1.8, color:"white", fontWeight:"normal",}} >
          <h3>Connect SUI Wallet</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx = {{ ml:2, mb: 1, color:"#b8bec3"}}>
            <Typography variant="">Available  Wallets</Typography>
          </DialogContentText>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            sx={{
              // "&:hover": {
              //   backgroundColor: "rgba(98, 98, 103, 0.2)",
              //   color: "white",
              //   "& .MuiListItemIcon-root": {
              //     color: "white"
              //   }
              // }
            }}
          >
            {wallets.length === 0 ? (
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText/> 
                </ListItemButton>
              </ListItem>
             
            ) : (
              wallets.map((wallet) => (
                <ListItem disablePadding key={wallet.name} style={{ paddingTop: 0, paddingBottom: 0, marginTop: 5 }}>
                   <ListItemButton 
                      sx={{ borderRadius: '8px', 
                           "&:hover": {
                              backgroundColor: "rgba(191, 192, 192, 0.2)",
                            }
                        }} 
                   
                   
                   onClick={() => {login(wallet.name)}}>
                      <SuiIcon/> 
                        {/* <ListItemText>  */}
                          <Typography 
                            fontWeight="normal" 
                            variant="h7" 
                            color="white"
                          >{wallet.name}
                          </Typography>
                        {/* </ListItemText> */}
                      </ListItemButton>
                </ListItem>
              ))
            )}
          </List>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" 
             style={{
            //   color: colors.primary[100],
            //   borderColor: colors.primary[100]
          }}  sx = {{ mr:3.3, mb:3, mt: -2, 
                      backgroundColor:"#4f5e6b",
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#4f5e6b',
                        color: 'white',
                    },}} onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ConnectWallet;