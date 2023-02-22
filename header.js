import { Divider, Grid } from '@mui/material'
import React from 'react'

const header = () => {
  return (
    <div>
        <Grid container direction="row" xs={12}>

            <Grid container direction="row" lg={3} md={4} sm={5} xs={5} alignItems="center" justifyContent="flex-start">
                <h1 style={{marginLeft:50}}>drublo</h1>
            </Grid>

            <Grid container direction="row" lg={6} md={4} sm={2} xs={2}></Grid>
            
            <Grid container direction="row" lg={3} md={4} sm={5} xs={5} justifyContent="right">
              <Grid container direction="column" justifyContent="center" style={{marginRight:"-80px"}}>
              <h1 style={{fontSize:15,marginLeft:"-85px",color: "#696969",}}>{localStorage.getItem("email")}</h1>
              <p onClick={
                ()=>{
                  localStorage.removeItem('id');
                  localStorage.removeItem('userName');
                  localStorage.removeItem('email');
                  window.location.href = '/'
                }
              } style={{color:"#59AFFF",cursor:"pointer",textDecoration:"none", fontSize:15,marginLeft:80,marginTop:"-10px"}}>sign out</p>
              
              </Grid>
            
                
            </Grid>

            <Divider style={{color:"1px solid black",width:"100%"}} />
        </Grid>
    </div>
  )
}

export default header