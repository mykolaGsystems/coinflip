// import Button from '@mui/material/Button';
import './App.css';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import List from "@mui/material/List";
import ListItemButton from '@mui/material/ListItemButton';
import { alpha, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material';
import Topbar from "./components/TopBar"
import { useState, useSyncExternalStore, useContext, getState, useEffect} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from "@mui/material/CssBaseline";
import lootbox_img from "./img/lootbox.png"
import wallpaper from "./img/wallpaper.png"
import { TransactionBlock } from "@mysten/sui.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WalletKitProvider } from "@mysten/wallet-kit"
import OpeningsList from "./components/OpeningsList"

var rootStyle = {
  height: '100vh',
  // height: "100%",
  width: "100%",
  backgroundColor: '#77a6b8',
  // min-height: '100vh'
}

const typography = {
  fontFamily: ["Questrian"].join(","), // there need add Gliber reference,your font family name should be place the first position
};

let theme = createTheme({typography})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WalletKitProvider>
        <CssBaseline />
        <div style={rootStyle}>
          <main className="content">
            <Topbar/>
            <OpeningsList/>
          </main>
        </div>
      </WalletKitProvider>
    </ThemeProvider>
  );
}

export default App;
