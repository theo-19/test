import Typography from "@mui/material/Typography";
import React from "react";
import "./App.css";
import Map from "./components/Map";
import Menus from "./components/Menus";

export default React.memo(MainContainer);
function MainContainer() {
  return (
    <div className="main-container">
      <div className="header">
        <Typography className="page-title">
          {"This is dummy data for test purpose"}
        </Typography>
      </div>
      <Menus />
      <Map />
    </div>
  );
}
