import React from "react";
import Header from "../Components/header";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "left", marginLeft: 50, fontSize: 18 }}>
        Project name one
      </h1>
      <h1
        style={{
          textAlign: "left",
          marginLeft: 50,
          fontSize: 13,
          color: "#59AFFF",
        }}
      >
        Switch project
      </h1>

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 224,
          
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          style={{ marginLeft: 50, marginTop: 30 }}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          <Tab
            style={{ marginLeft: "-20px" }}
            label="Phases"
            {...a11yProps(0)}
          />
          <Tab style={{ marginLeft: "-40px" }} label="TeaM" {...a11yProps(1)} />
          <Tab
            style={{ marginLeft: "-15px" }}
            label="Setting"
            {...a11yProps(2)}
          />
        </Tabs>
        <TabPanel style={{width:"70%"}} value={value} index={0}>
          <Grid
            container
            alignItems="center"
            justifyContent="end"
            direction="row"
          >
            <button
              style={{
                background: "#F6F6F6",
                height: "40px",
                width: "150px",
                color: "#59AFFF",
                fontWeight: "600",
                border: "none",
                cursor:"pointer",
                borderRadius: 12,
              }}
            >
              Create New Phase
            </button>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </div>
  );
}
