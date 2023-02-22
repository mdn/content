import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Logo from "../images/logo.png"
import { Grid, TextField } from '@mui/material';



const style = {
    position: 'absolute',
    top: '50%',
    left: '48.5%',
    transform: 'translate(-50%, -50%)',
    width: "350px",
    bgcolor: 'background.paper',
    borderRadius:2,
    boxShadow: 24,
    p: 4,
  };


const Loginform = () => {


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
      <h1  style={{fontSize:"1rem",fontWeight:400,lineHeight:1.5,marginTop:30,cursor:"pointer",marginLeft:20}} onClick={handleOpen}>Login</h1>
      <Grid container direction="row" xs={6} justifyContent="center">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Grid container direction="row" justifyContent="center" >
        <img style={{height:"40px",width:"40px"}} src={Logo}></img>
        </Grid>
        <h1 style={{fontSize:"20px",lineHeight:"24px",color:"#51505d",fontWeight:400,textAlign:"center"}}>
            Welcome back! Please Login
        </h1>
        <Grid container direction="row" justifyContent="center">
        <p style={{textAlign:"left",width:"90%",fontWeight:400,fontSize:"16px",color:"#72727d"}}>Mobile No. / Email ID</p>
        <TextField placeholder='Mobile No. / Email ID' style={{height:50,width:"90%"}} />
        <p style={{textAlign:"left",width:"90%",fontWeight:400,fontSize:"16px",color:"#72727d"}}>Password</p>
        <TextField placeholder='Enter Password' style={{height:50,width:"90%"}} />

        <Grid container direction="row" lg={6} md={6} xs={6} sm={6}>
        <h1 style={{fontSize:"13px",color:"#72727d",float:"left",textAlign:"center",width:"70%"}}>Stay Logged in</h1>
        </Grid>
        <Grid container direction="row" lg={6} md={6} xs={6} sm={6}>
            <h1 style={{fontSize:"13px",color:"#00bcd5",cursor:"pointer",float:"right",textAlign:"right",width:"90%"}}>Forgot Password?</h1>
        </Grid>
        <button style={{backgroundColor:"#009aaf",height:"40px",borderRadius:4,width:"90%",border:"none",color:"white",marginTop:10}}>Login</button>
        <p style={{width:"100%",textAlign:"center",fontSize:"12px",color:"#b1b3b9"}}>OR</p>
        <button style={{backgroundColor:"#009aaf",height:"40px",borderRadius:4,width:"90%",border:"none",color:"white",marginTop:10}}>Login with OTP</button>

        <h1 style={{width:"40%",textAlign:"right",fontSize:"15px",color:"#95959d",fontWeight:400}}>New to Viaha?</h1>
        <h1 style={{width:"2%"}}></h1>
        <h1 style={{width:"49%",textAlign:"left",fontSize:"15px",color:"#72727d",cursor:"pointer",fontWeight:600}}>Sign Up Free</h1>
        </Grid>
        
        </Box>
      </Modal>
      </Grid>
   
    </div>
  )
}

export default Loginform