import { useWalletKit, WalletKitContext, WalletKitProvider,  } from "@mysten/wallet-kit"
import { createWalletKitCore, keyStores } from "@mysten/wallet-kit-core"
import Button from '@mui/material/Button';
import ConnectWallet from "./ConnectWallet";
import { useState, useSyncExternalStore, useContext, useEffect } from 'react';
import { Box, setTheme, useTheme} from "@mui/material";
// import { ColorModeContext, tokens } from "../theme";
import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AccountWallet = () =>  {
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
    const {
        currentWallet,
        currentAccount,
        signTransactionBlock,
        signAndExecuteTransactionBlock,
        signMessage,
        disconnect,
      } = useWalletKit();
    
      useEffect(() => {
        // You can do something with `currentWallet` here.
      }, [currentWallet]);
    
    const notify = () => {
        toast.success('Wallet Disconnected!', {
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

    function logout() {
        disconnect()
        notify()
    }

    return (
        <Box sx={{ marginLeft: 3}}>
            { currentAccount ? (
                <Button
                    variant="contained" 
                    size="large"
                    style={{
                        backgroundColor: "#255f77"
                        // color: colors.primary[100],
                        // borderColor: colors.primary[100]
                    }} 
                        onClick={() => {logout()}}
                        // onClick={notify}
                >  
                {/* {currentWallet} */}
                    {`${currentAccount.address.slice(0,5)}...${currentAccount.address.slice(-5)}`}
                </Button>
            ) : (
                <ConnectWallet/>
            )}
             <ToastContainer />
        </Box>
    );
}

export default AccountWallet;