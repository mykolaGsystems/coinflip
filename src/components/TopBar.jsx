import { ConnectButton } from "@mysten/wallet-kit";
import AccountWallet from "../wallet-adapter/AccountWallet";
import ConnectWallet from "../wallet-adapter/ConnectWallet"

import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
// import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import nav_logo from "../img/s_logo.png"
import lootbox_img from "../img/lootbox.png"
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';


const Topbar = () => {
  const matches = useMediaQuery('(min-width:600px)')
    //get the color filters
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
    // const colorMode = useContext(ColorModeContext);
    

    function ConnectToWallet() {
      return (
          <ConnectButton />          
      );
    }

    return (
        <Box display="flex" justifyContent="space-between" p={2} sx= {{ bgcolor: "#77a6b8", marginLeft: "15px"}}>
          {/* SEARCH BAR */}
          <Box
            component="img"
            display="flex"
            sx={{
              
              maxWidth: 50,
              // maxHeight: { xs: 233, md: 167 },
              // maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src={nav_logo}
          />
    
          {/* ICONS */}
          <Box display="flex">
           
    
            {/* <IconButton>
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
              <PersonOutlinedIcon />
            </IconButton> */}
            <AccountWallet/>
          </Box>
        </Box>
      );
    };
    
    export default Topbar;