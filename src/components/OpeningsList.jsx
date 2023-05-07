import { useState, useSyncExternalStore, useContext, getState, useEffect} from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import List from "@mui/material/List";
import ListItemButton from '@mui/material/ListItemButton';
import { alpha, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import lootbox_img from "../img/lootbox.png"
import wallpaper from "../img/wallpaper.png"
import reward from "../img/reward.png"
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import {
    TransactionBlock,
} from '@mysten/sui.js';
import { JsonRpcProvider, SuiEvent, Connection } from '@mysten/sui.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useWalletKit,WalletKitProvider,  WalletKitContext } from "@mysten/wallet-kit"
import { CircularProgress } from "@mui/material";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import { red, green, blue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material';

const OpeningsList = () => {
    const [open, setOpen] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [lootboxReward, setLootBoxReward] = useState(null);
    const [loading, setLoading] = useState(false);


    const connection = new Connection({
        fullnode: 'https://fullnode.testnet.sui.io:443',
    });
    const provider = new JsonRpcProvider(connection);

    const addToTransactions = (value) => {
        setTransactions((prevArray) => [value, ...prevArray]);
    };

    const addArrToTransactions = (newTransactions) => {
        setTransactions((prevArray) => [...prevArray, ...newTransactions]);
    };

    const {
        currentWallet,
        wallet,
        currentAccount,
        signTransactionBlock, 
        signAndExecuteTransactionBlock,
        signMessage,
        disconnect,
    } = useWalletKit();

    useEffect(() => {
        const fetchOldData = async () => {
            // setLoading(true);
            // const result = await getOldTransactions();
            const result = setDefaultdata();
            addArrToTransactions(result);
            // setLoading(false);
        }

     
            fetchOldData();
            // fetchRecentPlays();
     
    }, []);

    const setDefaultdata = () => {
        let const_arr = [];
        let prizes = ["OG", "Slimes WL", "Merch", "Special Prize", "NFT", "Fuddies NFT", "Misfits NFT", "LootRyder NFT", "Special Key"];
        
        let row = {"id" : 1, "wallet": "0xa1bdd1ea39b2de0208e8764f8e6d49a4da34e903eed8487c0707bd6f2adcfd61", "prize": "Special Prize", ts: 1};
        for(var i = 1; i < 20; i++){
            const random = Math.floor(Math.random() * prizes.length);
            console.log(random)
            let row = {"id": i, "wallet": "0xa1bdd1ea39b2de0208e8764f8e6d49a4da34e903eed8487c0707bd6f2adcfd61", "prize":  prizes[random], ts: i}
            const_arr = [...const_arr, row];
        }


            // console.log(row)
            // addToTransactions(row);
           
        return const_arr
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        window.location.reload();
    };

    const renderTimeList = (ts) => {
        let phrase = "";
        if(ts <= 1){
            phrase = `just now`;
        } else if(ts > 1 && ts < 60){
            phrase = `${ts} minutes ago`;
        } else if (ts > 60){
            let hours = Math.round(ts/60);
            phrase = `${hours} hours ago`;
        };

        return (
            <Box component="span" className='tx-text'>
                {phrase}
            </Box>
        )
    };
    
    const renderAward = () => {
        if(lootboxReward === "Special prize"){
            return <Box component="span">
                You've won <span style={{color: "#FFD700", fontSize:"22px", marginLeft:5, marginRight:5}}>{`${lootboxReward}`}!</span>
            </Box>
        } else {
            return <Box component="span">
                You've won <span style={{color: "#00BFFF", fontSize:"22px", marginLeft:5, marginRight:5}}>{`${lootboxReward}`}</span> SUI!
            </Box>
        }
    };

    const renderAwardList = (wallet, prize, ts) => {
        let prizes = ["OG", "Slimes WL", "Merch", "Special Prize", "NFT", "Fuddies NFT", "Misfits NFT", "LootRyder NFT", "Special Key"];
        // if(prize === "Special Prize"){
        if(prizes.includes(prize)) {
            return <Box component="span" display="flex" justifyContent="space-between" width="100%" className='text'>
                <span>
                    <span style={{color: "#B2FFFF"}}>{wallet.slice(0,5)}...{wallet.slice(-5)}</span> won <span className='special' style={{color: "#FFD700", fontSize:"20px", marginLeft:5, marginRight:5}}>{`${prize}`}!</span>
                </span>
                <span>
                    {renderTimeList(ts)}
                </span>
            </Box>
        } else if (prize === 0.1) {
            return <Box component="span" display="flex" justifyContent="space-between" width="100%" className='text'>
                <span>
                    <span style={{color: "#B2FFFF"}}>{wallet.slice(0,5)}...{wallet.slice(-5)}</span> won <span className='special' style={{color: "#e8000d", fontSize:"20px", marginLeft:5, marginRight:5}}>{`${prize}`}</span> SUI
                </span>
                <span>
                    {renderTimeList(ts)}
                </span>
            </Box>
        } else if (prize === 0.5) {
            return <Box component="span" display="flex" justifyContent="space-between" width="100%" className='text'>
                <span>
                    <span style={{color: "#B2FFFF"}}>{wallet.slice(0,5)}...{wallet.slice(-5)}</span> won <span className='special' style={{color: "#ff8243", fontSize:"20px", marginLeft:5, marginRight:5}}>{`${prize}`}</span> SUI
                </span>
                <span>
                    {renderTimeList(ts)}
                </span>
            </Box>
        } else if (prize === 1) {
            return <Box component="span" display="flex" justifyContent="space-between" width="100%" className='text'>
                <span>
                    <span style={{color: "#B2FFFF"}}>{wallet.slice(0,5)}...{wallet.slice(-5)}</span> won <span className='special' style={{color: "#66FF99", marginLeft:5, marginRight:5}}>{`${prize}`}</span> SUI
                </span>
                <span>
                    {renderTimeList(ts)}
                </span>
            </Box>
        }
    };

    async function fetchRecentPlays(){
        const somePackage = "0x3d631aa8d124f9de2808598b078665dc23b79b094bb00c377afd75a8ac27b556";
        const testnetLootFilter = {
            MoveModule : {package: somePackage, module: "lootboxes" }
        };

        await provider.subscribeEvent({
            filter: testnetLootFilter,
            onMessage(SuiEvent) {
                const currentTimestamp = Date.now();
                let address = SuiEvent.parsedJson.player_address;
                let prize = SuiEvent.parsedJson.winning_lot;
                if (prize === "1") {
                    prize = 0.1
                } else if (prize === "2"){
                    prize = 0.5
                } else if (prize === "3") {
                    prize = 1
                } else if (prize === "4"){
                    prize = "Special Prize"
                }
                let ts = SuiEvent.timestampMs;
                const differenceInMilliseconds = currentTimestamp - ts;
                const differenceInMinutes = differenceInMilliseconds / (1000 * 60);
                const roundedDifferenceInMinutes = Math.round(differenceInMinutes);

                let row = {"id" : ts, "wallet": address, "prize": prize, "ts": roundedDifferenceInMinutes}
                addToTransactions(row);
            },
        });

    };

    async function playLootbox(){
        // const packageObjectId = '0x70cb7f6efe3d3097cfa3b7096ce6bc95a3c81e3b86b3a38b75a08db8ea1f0d51';
        const txb = new TransactionBlock();
        // const [coin] = txb.splitCoins(txb.gas, [txb.pure(1)]);
        // txb.transferObjects([coin], txb.pure(currentAccount.address));
        // txb.transferObjects([coin], txb.pure(currentAccount.address));
        
        txb.moveCall({
            target: "0x3d631aa8d124f9de2808598b078665dc23b79b094bb00c377afd75a8ac27b556::lootboxes::play_lootbox",
            arguments: [
                    txb.object("0xad8726f1542d659a483e3ae2bb1c9cee27936d46a491ea3b5141ede6f240841b"),
                    txb.pure('0x6'),
            ],
            // type_arguments: ['0x70cb7f6efe3d3097cfa3b7096ce6bc95a3c81e3b86b3a38b75a08db8ea1f0d51::lootboxes::Lootbox']
            
            // typeArguments:["address"]
        });
        txb.setGasBudget(10000000);

        try {
            const data = await signAndExecuteTransactionBlock({transactionBlock:txb, options: { showInput: true, showEvents: true, showEffects: true }})
            let reward = data.events[0].parsedJson.winning_lot;
            if (reward === "1") {
                setLootBoxReward(0.1)
            } else if (reward === "2"){
                setLootBoxReward(0.5)
            } else if (reward === "3") {
                setLootBoxReward(1)
            } else if (reward === "4"){
                setLootBoxReward("Special prize")
            }
            handleClickOpen();
        } catch (error) {
            console.error(error)
        }
    };

    async function getOldTransactions(){
        let const_arr = []
        const currentDate = new Date();
        const oldTransactions = await provider.getOwnedObjects({
            owner: '0xad8726f1542d659a483e3ae2bb1c9cee27936d46a491ea3b5141ede6f240841b'
        });

        let arr_ids = oldTransactions.data.map(function(input) {
            return `${input.data.objectId}`;
        })

        const txns = await provider.multiGetObjects({
            ids: arr_ids,
            // only fetch the object type
            options: {showContent: true },
        });


        txns.map(function(input){
            let fields = input.data.content.fields;
            let address = fields.account_id;
            let prize = fields.winning_lot;
            if (prize === "1") {
                prize = 0.1
            } else if (prize === "2"){
                prize = 0.5
            } else if (prize === "3") {
                prize = 1
            } else if (prize === "4"){
                prize = "Special Prize"
            }
            let ts = fields.timestamp_ms;
            const pastDate = new Date(parseInt(ts))
            const diffMilliseconds = currentDate - pastDate;
            const diffMinutes = diffMilliseconds / (1000 * 60);
            const roundedDifferenceInMinutes = Math.round(diffMinutes);
            let row = {"id" : ts, "wallet": address, "prize": prize, ts: roundedDifferenceInMinutes}
            // console.log(row)
            // addToTransactions(row);
            const_arr = [...const_arr, row];
        });
        
        let sortedTransactions = const_arr.sort((a, b) => a.ts - b.ts);
        // console.log(sortedTransactions)
        // addToTransactions(sortedTransactions);
        
        return sortedTransactions

        // console.log(a)
    };
    
    return(
        <div className="app-content-list">

            { !currentAccount ? (
                <Box sx={{marginTop: 10}}>
                    <Typography variant='bold'>
                        Please Connect Wallet
                    </Typography>
                </Box>
            ) : (
                <></>
            )}

            <Box>
                <Box
                    sx={{
                        marginBottom: 3,
                        marginTop: 5,
                        backgroundColor: "#88c3da",
                        borderRadius: 2,
                        // minHeight: "80px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 2.5,
                        fontFamily: ["Questrian"].join(","),
                        color:"#255f77",
                        fontSize: "20px", 
                        border: "1px solid",
                        // borderColor: "linear-gradient(45deg, #255f77 35%, #9bcde0 80%)" 
                        // fontSize: "20px"
                        // flexdirection: "column",
                    }}
                >   
                    <Box component="span"> 
                        XP Balance: 
                        <span style={{fontSize: "20px", color:"#FFE66E", marginLeft:10,}}>
                        { !currentAccount ? (
                            "$$$$$"
                        ): (
                            0.2312
                        )}
                        </span>
                    </Box>
                </Box>

                <Box sx={{
                    marginBottom: 3,
                    backgroundColor: "#88c3da",
                    // background: "radial-gradient(#e66465, #9198e5)",
                    borderRadius: 2,
                    minHeight: "70px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #255f77",
                
                }}>
                    <Button 
                        variant="contained" 
                        startIcon={<img src={lootbox_img} className="lootbox-btn"/>}
                        // onClick={} 
                        size="large"
                        disabled={!currentAccount}
                        onClick={ async() => {playLootbox()}}
                        style={{
                            backgroundColor: "#255f77",
                            margin: 25, 
                            fontSize: 22,
                        }} 
                        sx={{
                            boxShadow: 8
                        }}
                        >
                        Play LootBox
                    </Button>
                </Box>
            </Box>
           

            <Typography variant="bold" className='action' sx={{marginTop: 3, marginBottom:6}}>Live Openings</Typography>
            
            <Box sx={{ 
                    // backgroundColor: "#83c3d8", 
                    background: 'linear-gradient(45deg, #255f77 35%, #9bcde0 80%)',
                    width: '100%',
                    height: '100%',
                    minHeight: 415, 
                    maxWidth: 590,
                    display: "flex",
                    alignItems:"center",
                    justifyContent: "center",
                    border: "1px solid #3e8097",
                    borderRadius: 3
                    }}>
                <Box 
                    sx={{  
                        width: '95%', 
                        maxHeight: 375, 
                        maxWidth: 550,  
                        borderTopLeftRadius: 8, 
                        borderBottomLeftRadius: 8, 
                        borderTopRightRadius:8,
                        borderBottomRightRadius: 8,                                        
                        bgcolor: alpha('#1c5f76', 0.5),  
                        // boxShadow: "0 30px 75px rgba(155,205,224,255)", 
                        // borderLeft: "1.5px solid #4f5e6b",  
                        // borderTop: "1.5px solid #4f5e6b",  
                        // borderBottom: "1.5px solid #4f5e6b"
                        borderLeft: "1.2px solid white",
                        borderTop: "1.2px solid white",
                        borderBottom: "1.2px solid white"
                        
                    }}
                >  
                    { loading ? (
                            <Box display="flex" justifyContent="center" alignItems="center" minHeight="350px">
                                <CircularProgress size={100} color="inherit" style={{ color: "white" }} />
                            </Box>
                        ) : (
                            <List className="openningList"
                    
                            sx={{
                                "&::-webkit-scrollbar": {
                                width: 10,
                                borderRadius: 8,
                                },
                                "&::-webkit-scrollbar-track": {
                                backgroundColor:  '#4f5e6b',
                                borderRadius: 8
                                },
                                "&::-webkit-scrollbar-thumb": {
                                backgroundColor: "#9bcde0",
                                borderRadius: 8
                                }
                            }}>
            
                            { transactions.map((transaction) => (
                                <ListItem disablePadding key={transaction.id} style={{ paddingTop: 0, paddingBottom: 0, marginTop: -5 }} >
                                    <ListItemButton sx={{ borderRadius: '0px', borderBottom: "1.5px solid " }} onClick={() => {}}>
                                    {/* <Box sx={{ width: '100%', display: "flex", justifyContent: "space-between" }}> */}
                                        <Box sx={{ width: '100%', display: "flex" }}>
                                            <Box sx={{ width: '100%', display: "flex"}}>
                                                {renderAwardList(transaction.wallet, transaction.prize, transaction.ts)}
                                            </Box>                            
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        )
                    }
                </Box>
            </Box>        
        {/* <Box 
            sx={{ 
                width: '95%', 
                maxHeight: 375, 
                maxWidth: 550,  
                borderTopLeftRadius: 8, 
                borderBottomLeftRadius: 8, 
                borderTopRightRadius:8,
                borderBottomRightRadius: 8,                                        
                bgcolor: alpha('#454e5b', 0.3),  
                boxShadow: "0 30px 75px rgba(155,205,224,255)", 
                borderLeft: "1.5px solid #4f5e6b",  borderTop: "1.5px solid #4f5e6b",  
                borderBottom: "1.5px solid #4f5e6b"
            }}
        >  
            { loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" minHeight="350px">
                        <CircularProgress size={100} color="inherit" style={{ color: "white" }} />
                    </Box>
                ) : (
                    <List className="openningList"
            
                    sx={{
                        "&::-webkit-scrollbar": {
                        width: 10,
                        borderRadius: 8,
                        },
                        "&::-webkit-scrollbar-track": {
                        backgroundColor:  '#4f5e6b',
                        borderRadius: 8
                        },
                        "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#9bcde0",
                        borderRadius: 8
                        }
                    }}>
    
                    { transactions.map((transaction) => (
                        <ListItem disablePadding key={transaction.id} style={{ paddingTop: 0, paddingBottom: 0, marginTop: -5 }} >
                            <ListItemButton sx={{ borderRadius: '0px', borderBottom: "1.5px solid " }} onClick={() => {}}>
                     
                                <Box sx={{ width: '100%', display: "flex" }}>
                                    <Box sx={{ width: '100%', display: "flex"}}>
                                        {renderAwardList(transaction.wallet, transaction.prize, transaction.ts)}
                                    </Box>                            
                                </Box>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                )
            }
           
        </Box> */}

      

    
       
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
                "& .MuiDialog-container": {
                  "& .MuiPaper-root": {
                    // width: "100%",
                    maxWidth: "400px",  // Set your width here
                    borderRadius: '12px',
                    backgroundColor: "#3c3c3c"
                  },
                },
              }}
        >
            <DialogTitle id="alert-dialog-title" sx={{
                backgroundColor: "#3c3c3c",
                textAlign: "center",
                color: "white",
                marginTop: 2
                
            }}>
                {"Congratulations!"}
            </DialogTitle>
            <DialogContent sx={{
                backgroundColor: "#3c3c3c",
                maxheight: 350,
                maxWidth: 3400,
            }}>
            <Box
                component="img"
                sx={{
                    height: 300,
                    maxWidth: 300,
                    backgroundColor: "#3c3c3c"
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={reward}
            />
            <DialogContentText id="alert-dialog-description" sx = {{
                textAlign: "center",
                color: "white"
            }} >
                {renderAward()}
            </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ backgroundColor: "#3c3c3c" }}>
                <IconButton onClick={handleClose} size="large" sx={{
                    "&:hover": {
                        backgroundColor: "rgba(191, 192, 192, 0.2)",
                    }
                }}>
                    <CancelPresentationIcon/>
                </IconButton>
            </DialogActions>
        </Dialog>
        {/* <ToastContainer /> */}
        </div>
    )
}

export default OpeningsList;
