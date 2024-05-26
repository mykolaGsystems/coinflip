import 'regenerator-runtime/runtime';
import * as React from 'react';
import { useState, useSyncExternalStore, useContext, useEffect } from 'react';
import { Button } from '@mui/material';
import '@near-wallet-selector/modal-ui/styles.css';

import { useNearContext } from "../context/NearContext"

const ConnectButton = () => {
    const { accountId, signOut, modal } = useNearContext();

    function formatString(str) {
        if (str.length > 10) {
            return str.substring(0, 4) + '...' + str.substring(str.length - 4);
        }
        return str;
    }
    if (accountId) {
		return (
			<Button 
                onClick={signOut}
                variant="contained"
                className='MuiButton-connect'
                // sx={{fontSize: '18px !important'}}
                
            >
                {formatString(accountId)}
            </Button>
		);
	}
	return (
		<Button 
            // startIcon={<AccountBalanceWalletIcon />} 
            variant="contained"
            onClick={() => modal.show()}
            className='MuiButton-connect'
            // sx={{fontSize: '18px !important'}}
            
        >
            Connect Wallet
        </Button>
	);

};

export default ConnectButton;
