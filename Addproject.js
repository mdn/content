import { Button, Grid, Paper } from "@mui/material";
// import { Box } from "@mui/system";
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, { useState, useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { saveDataWithoutDocId,getDataWithoutDocId , setData} from "../Functions/functions";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 150,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function AddProjectPage() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [projects, setProjects] = useState([]);
  const [count, setCount] = useState(1);

  const [projectName, setProjectName] = useState('')

  useEffect(() => {
    getUserProjects()
  }, [])

      // let tempProjects = projects;
    // tempProjects.push({
    //   name: "My Project Name",
    // });
    // setProjects(tempProjects);
    // setCount(count + 1);
  
  
  const getUserProjects = () =>{
    let allProject = []
    getDataWithoutDocId('Project').then(
      (result)=>{
        result.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          allProject.push(doc.data())
        });
        console.log("This is the project",allProject)
        setProjects(allProject);
    setCount(count + 1);
      }
    )
  }

  const addProject = () => {
    saveDataWithoutDocId('Project',{
      projectUserId: localStorage.getItem("id"),
      completionHour: '',
      projectName : projectName,

        
    }).then(
      ()=>{
        window.location.reload();
      }
    )
  };

  return (
    <div>
      <Grid container direction="row" alignItems="center" justifyContent="left">
        <h1
          style={{
            marginLeft: 50,
            fontSize: 25,
            fontWeight: 400,
            textDecorationLine: "none",
          }}
        >
          My Projects
        </h1>
        <a onClick={handleOpen}>
        <AddCircleIcon
        
          // onClick={() => addProject()}
          style={{ color: "#59AFFF",cursor:"pointer", marginTop: 10, marginLeft: 5 }}
        />
        </a>

        <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 style={{fontSize:"15px"}} >Enter ProjectName</h1>

          <input value={projectName} onChange={(e)=>{
                setProjectName(e.target.value);
                console.log("THis is the setate",projectName)
              }} style={{width:"142px"}}></input>

          <Grid container direction="row" style={{marginTop:10}}>
          <button
          onClick={handleClose}
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: 4,
              border: "1px solid #C2C2C2",
              marginRight: 10,
              width: 70,
              height: 25,
            }}
          >
            Cancel
          </button>
          <button
          onClick={() => addProject()}
          
            style={{
              background: "#59AFFF",
              border: "none",
              borderRadius: 4,
              color: "white",
              width: 70,
              height: 25,
            }}
          >
            Create
          </button>
          </Grid>
        </Box>
      </Modal>

      </Grid>
      <Grid container direction="row">
        {projects.map((item) => {
          return (
            <a
              href="/projectphase"
              elevation={0}
              style={{
                width: "20%",
                height: 90,
                border: "2px solid #C2C2C2",
                borderRadius:4,
                marginLeft: 50,
                marginBottom: 20,
                textDecoration: "none",
              }}
            >
              <h1
                style={{
                  textAlign: "start",
                  color: "#696969",
                  fontSize: 15,
                  marginLeft: 20,
                }}
              >
                {item.projectName}
              </h1>
            </a>
          );
        })}
      </Grid>

      <Grid container direction="row" alignItems="center" justifyContent="left">
        <h1 style={{ marginLeft: 50, fontSize: 25, fontWeight: 400 }}>
          Invitations
        </h1>
      </Grid>
      <Paper
        elevation={0}
        style={{
          width: "20%",
          height: 130,
          border: "2px solid #C2C2C2",
          marginLeft: 50,
        }}
      >
        <h1
          style={{
            textAlign: "start",
            color: "#696969",
            fontSize: 15,
            marginLeft: 20,
          }}
        >
          Project name three
        </h1>
        <h1 style={{ textAlign: "start", fontSize: 15, marginLeft: 20 }}>
          Invited By
        </h1>
        <h1
          style={{
            textAlign: "start",
            color: "#696969",
            fontSize: 15,
            fontWeight: 400,
            marginLeft: 20,
            marginTop: "-10px",
          }}
        >
          user@gmail.com
        </h1>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="right"
          style={{ marginLeft: "-15px" }}
        >
          <button
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: 4,
              border: "1px solid #C2C2C2",
              marginRight: 10,
              width: 70,
              height: 25,
            }}
          >
            Decline
          </button>
          <button
            style={{
              background: "#59AFFF",
              border: "none",
              borderRadius: 4,
              color: "white",
              width: 70,
              height: 25,
            }}
          >
            Accept
          </button>
        </Grid>
      </Paper>
    </div>
  );
}

export default AddProjectPage;
