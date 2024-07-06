import { Box, Container } from "@mui/material";
import React, { useState } from 'react';
import { NearLogo } from '../utils/NearLogo';
import { Button, Typography } from "@mui/material";
import LabeledInput from "./LabeledInput";
import { Padding } from "@mui/icons-material";
import { styled } from '@mui/system'

const StyledButton = styled(Button)(({ theme, selected }) => ({
    backgroundColor: selected ? '#122031' : '#09505F',
    boxShadow: selected ? '0 0 15px #80ED99 !important' : ''
   
    // '&:hover': {
    //   backgroundColor: selected ? theme.palette.primary.dark : theme.palette.grey[400],
    // },
}));;

const DepositMenu = () => {
    const [AmountValue, setAmountValue] = useState(1);
    const [Promocode, setPromocode] = useState('');
    const [paymentMethod, setPaymentMethod] = React.useState(true);


    const handleAmountChange = (event) => {
      setAmountValue(event.target.value);
    };

    const handlePromocode = (event) => {
        setPromocode(event.target.value);
    }

    const hanglePaymentMethod = () => {
        setPaymentMethod(!paymentMethod);
      };

    const checkout = () => {

    }

    return (
        <Box>
            <Box sx={{color: "white", padding: 4, backgroundColor: "#122031"}}>
                Top Up Balance
            </Box>
            
            <Box sx={{backgroundColor: "#0f1b2a", marginTop: 0, padding: 4}}>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <StyledButton sx={{borderRadius: '30%', width: 100, height: 100, backgroundColor: '#1a2e46'}}  selected={paymentMethod ? 1 : 0}
                            startIcon={<NearLogo className='DepositMenu-near'/>}>
                    </StyledButton>
                </Box>
            </Box>

            <Box>
                <Box sx={{paddingRight: 8, paddingLeft: 8}}>
                    <LabeledInput
                        sx={{backgroundColor: '#122031', borderRadius: 4, marginBottom: 2}}
                        label="Amount"
                        placeholder="ENTER THE AMOUNT"
                        value={AmountValue}
                        onChange={handleAmountChange}
                    />
                </Box>
                <Box sx={{paddingRight: 8, paddingLeft: 8}}>
                    <Box sx={{flexDirection: 'column', display: 'flex', alignItems: 'center', 
                                justifyContent: 'center', backgroundColor: '#122031',  
                                borderRadius: 4, padding: 2, color: 'white'
                            }}>
                        <Button 
                            sx={{minWidth: 200, minHeight: 50, fontSize: "18px !important"}}
                            onClick={checkout}
                            variant="contained"
                            className='MuiButton-connect'
                        >
                            Deposit
                        </Button>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: 2}}>
                            <Typography sx={{fontSize: '14px'}}>
                                Minimum deposit balance is <span style={{color: '#80ED99', fontSize: '16px'}}> 1 NEAR</span> 
                            </Typography>
                        </Box>
                    </Box>
                </Box>
               
                <Box sx={{paddingRight: 8, paddingLeft: 8, marginTop: 2, marginBottom: 4}}>
                    <LabeledInput
                        sx={{backgroundColor: '#122031', borderRadius: 4}}
                        label="Promocode"
                        placeholder="ENTER THE PROMOCODE"
                        value={Promocode}
                        onChange={handlePromocode}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default DepositMenu;