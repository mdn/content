import { Grid } from '@mui/material'
import React from 'react'
import Matchlogo from "../images/logo1.png"
import Verifiedlogo from "../images/logo2.png"
import Privacylogo from "../images/logo3.png"


const Footer = () => {
  return (
    <div>
        <Grid container direction="row" justifyContent="center">
        <h1 style=
        {{backgroundColor:"#00bcd5",fontWeight:400,marginBottom:20,lineHeight:1.5,height:35,borderRadius:"3px 3px 0 0",
        color:"white",borderBottom:"1px solid #dfe0e3",width:"250px",fontSize:"20px"}}>
            Trusted by Millions
        </h1>
        
        </Grid>
        <Grid container direction="row" justifyContent="center">
        <h1 style={{borderBottom:"1px solid #dfe0e3",width:"50%",marginTop:-20}}></h1>
       
        </Grid>
        <Grid container direction="row" justifyContent="center">
        <Grid container direction="row" lg={3} md={3} sm={12} xs={12}></Grid>
        <Grid container direction="row" lg={2} md={2} sm={12} xs={12} alignItems="center" justifyContent="center">
            <img style={{height:"40px",width:"40px"}} src={Matchlogo} />
            <h1 style={{color:"#95959d",marginLeft:10,fontSize:"1rem",fontWeight:400,lineHeight:1.5}}>Best Matches</h1>
        </Grid>
        <Grid container direction="row" lg={2} md={2} sm={12} xs={12} alignItems="center" justifyContent="center">
        <img style={{height:"40px",width:"40px"}} src={Verifiedlogo} />
            <h1 style={{color:"#95959d",marginLeft:9,fontSize:"1rem",fontWeight:400,lineHeight:1.5}}>Verified Profiles</h1>
        </Grid>
        <Grid container direction="row" lg={2} md={2} sm={12} xs={12} alignItems="center" justifyContent="center">
        <img style={{height:"40px",width:"40px"}} src={Privacylogo} />
            <h1 style={{color:"#95959d",marginLeft:10,fontSize:"1rem",fontWeight:400,lineHeight:1.5}}>100% Privacy</h1>
        </Grid>
        <Grid container direction="row" lg={3} md={3} sm={12} xs={12}></Grid>
        <h1 style={{borderBottom:"1px solid #dfe0e3",width:"50%",marginTop:20}}></h1>
        </Grid>
        
        
        
    </div>
  )
}

export default Footer