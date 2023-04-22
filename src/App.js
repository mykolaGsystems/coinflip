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
import { useWalletKit,WalletKitProvider,  WalletKitContext } from "@mysten/wallet-kit"
import OpeningsList from "./components/OpeningsList"

const wallet = "0x622306bbf59efb35a43e3a50ad250d2f99ec642c0cbd74e3641f37ef8fcbf5d9";

var rootStyle = {
  height: '100vh',
  backgroundColor: '#77a6b8'
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
          {/* <header className="App-header"> */}
         
          {/* </header> */}
        </main>
      </div>
    </WalletKitProvider>
   </ThemeProvider>
  );
}

export default App;
