import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

const PromoCodeInput = ({ label, placeholder, value, onChange, sx }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#0f1b2a', padding: 4, ...sx }}>
      <Typography sx={{ marginRight: 2, minWidth: '120px', color: 'white' }}>{label}</Typography>
      <Box sx={{ flexGrow: 1, position: 'relative' }}>
        <TextField
          variant="standard"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          fullWidth
          InputProps={{
            disableUnderline: true,
            sx: {
              '&::before': {
                borderBottom: '1px solid grey',
                content: '""',
                position: 'absolute',
                bottom: '-2px',
                left: 0,
                right: 0,
              },
              '& input': {
                color: 'white',
                paddingLeft: 0,
                paddingRight: 0,
              },
              '&::placeholder': {
                color: 'grey',
                opacity: 1,
              },
            },
          }}
          sx={{
            // default styles
            '& .MuiInputBase-root': {
              color: 'white',
            },
            '& .MuiInput-underline:before': {
              borderBottomColor: 'grey',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottomColor: 'grey',
            },
            // override styles
            ...(sx && sx.textField), // apply parent override styles
          }}
        />
      </Box>
    </Box>
  );
};

export default PromoCodeInput;
