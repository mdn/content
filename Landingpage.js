import { Button, Grid } from "@mui/material";
import React from "react";
import Background from "../images/background.png";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "../Functions/firebase";
import { saveData , getData} from "../Functions/functions";

const Landingpage = () => {
  const siginUsingGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        
        if(result.user)
        {
          getData('Users',result.user.uid).then(
            (doc)=>{
              if(doc.data())
              {
                let user = doc.data()
                const email = user.email;
                localStorage.setItem("email", email);
                localStorage.setItem("userName", user.userName);
                localStorage.setItem("id", result.user.uid);
                window.location.href = '/projectpage'
              }
              else
              {
                saveData('Users',result.user.uid,{
                  id:result.user.uid,
                  email: result.user.email,
                  userName : result.user.displayName,
                  projectUserId:''  
                }).then(
                  ()=>{
                    const email = result.user.email;
                    localStorage.setItem("email", email);
                    localStorage.setItem("id", result.user.uid);
                    localStorage.setItem("userName", result.user.displayName);
                    window.location.href = '/projectpage'
                  }
                )
              }
            }
          )
        }       
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div>
      <div
        style={{ background: `url(${Background})`, backgroundSize: "cover" }}
      ></div>

      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <h1 style={{ color: "#8C8C8C", fontSize: "2em", fontWeight: 600 }}>
          WELCOME TO
        </h1>
        <h1
          style={{
            color: "#000000",
            fontSize: "3em",
            fontWeight: 700,
            marginTop: "-30px",
          }}
        >
          drublo
        </h1>
        <Button
          style={{
            color: "#8C8C8C",
            border: "1px solid #8C8C8C",
            fontSize: "1em",
            fontWeight: "bold",
            width: "20%",
            height: "50px",
          }}
          onClick={()=>siginUsingGoogle()}
        >
          Sign In Using Google
        </Button>
      </Grid>
    </div>
  );
};

export default Landingpage;
