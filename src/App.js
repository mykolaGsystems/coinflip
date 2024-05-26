// import Button from '@mui/material/Button';
import './App.css';
import { backdropClasses, createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import 'react-toastify/dist/ReactToastify.css';
import OpeningsList from "./components/OpeningsList"
import NavigationBar from "./components/NavigationBar"
import { NearProvider } from './context/NearContext';
import './index.css';
import { Buffer } from 'buffer';

window.Buffer = Buffer;


var rootStyle = {
  height: '100vh',
  // height: '100%',
  // width: "100%",
  minHeight: '100vh',
  BackgroundHead:  {
    // backgroundImage: 'url('+ backgroundImage +')',
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundAttachment: "fixed",
    minHeight: '100vh',
    background: '-webkit-radial-gradient(top left, #0C7073, #213A57 50%)',
    // background: 'radial-gradient(at top left, #0C7073, #05161A 20%)',
  },

  Layer: {
    // backgroundColor: "rgba(119,136,153, 0.7)",
    minHeight: '100vh',
  }
}



const typography = {
  fontFamily: ["Questrian"].join(","), // there need add Gliber reference,your font family name should be place the first position
};

let theme = createTheme({typography})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NearProvider>
        <CssBaseline />
        <div style={rootStyle.BackgroundHead}>
          <main className="content" style={rootStyle.Layer}>
            {/* <Topbar/> */}
            <NavigationBar/>
            <OpeningsList/>
          </main>
        </div>
      </NearProvider>
    </ThemeProvider>
  );
}

export default App;
