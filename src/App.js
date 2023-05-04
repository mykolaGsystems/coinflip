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
import backgroundImage from "./img/Background.png"
import NavigationBar from "./components/NavigationBar"

var rootStyle = {
  height: '100vh',
  // height: "100%",
  width: "100%",
  backgroundColor: '#77a6b8',
  minHeight: '100vh',
  // height: '100vh',
  // width: "100%",
  // backgroundColor: 'transparent',
  // paperContainer: {
  //   height: "100%",
  BackgroundHead:  {
    backgroundImage: 'url('+ backgroundImage +')',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    minHeight: '100vh',
    // width: "100%",
  },

  Layer: {
    backgroundColor: "rgba(119,136,153, 0.7)",
    minHeight: '100vh',
    // position: "absolute",
    // top: "0",
    // left: "0",
    // width: "100%",
    // height: "100%",
  }
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
        <div style={rootStyle.BackgroundHead}>
          <main className="content" style={rootStyle.Layer}>
            {/* <Topbar/> */}
            <NavigationBar/>
            <OpeningsList/>
          </main>
        </div>
      </WalletKitProvider>
    </ThemeProvider>
  );
}

export default App;
