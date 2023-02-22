import React , { useState } from "react";
import Header from "../Components/header";
import AddProject from "../Components/Addproject";
import { Grid, Hidden, Paper } from "@mui/material";
import { saveData , setData} from "../Functions/functions";



function Projectpage() {

 

  const [userName, setUserName] = useState('')
  const updateUserName = ()=>{
    saveData('Users',localStorage.getItem("id"),{
      userName : userName
    }).then(
      (doc)=>{
        localStorage.setItem("userName", userName);
        window.location.reload();
      }
    )
  }
  return (
    <div>
      <Header />
      {localStorage.getItem("userName") === ""||localStorage.getItem("userName") === "undefined"    ? (
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Paper
            style={{
              width: "12%",
              background: "#E0E0E0",
              marginTop: 20,
              height: "50%",
            }}
          >
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <h1 style={{fontSize:"20px"}} >Enter Username</h1>
              <input value={userName} onChange={(e)=>{
                setUserName(e.target.value);
                console.log("THis is the setate",userName)
              }} style={{ }} required></input>
            </Grid>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <button
                style={{
                  marginTop: 10,
                  marginBottom: 20,
                  background: "#59AFFF",
                  borderRadius: 4,
                  width: 90,
                  border: "none",
                }}
                onClick={()=>{updateUserName()}}
              >
                Save
              </button>
            </Grid>
          </Paper>
        </Grid>
        
        
      ) : (
        <AddProject />
      )}

      
    </div>
  );
}

export default Projectpage;
