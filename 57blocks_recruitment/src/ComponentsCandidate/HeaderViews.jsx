import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../ComponentsCandidate/componentsCandidate.css";

const HeaderView = () => {
  const loginAdministrator = () => {
    console.log("solucionando la ruta");
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#FFFFFF",
        height: "11vh",
        width: "100vw",
        justifyContent: "space-around",
      }}
    >
      <Toolbar>
        <span className="img_logo" alt="logo_empresa"></span>
        <span className="menu_burger"></span>
        <div className="options_header">
          <Button
            style={{ color: "black", border: "none", marginRight: "5vw" }}
          >
            Services
          </Button>
          <Button
            style={{ color: "black", border: "none", marginRight: "5vw" }}
          >
            Why Us
          </Button>
          <Button
            style={{ color: "black", border: "none", marginRight: "5vw" }}
          >
            About
          </Button>
          <Button
            style={{
              color: "black",
              border: "none",
              marginRight: "5vw",
              fontWeight: "bold",
            }}
          >
            Careers
          </Button>
          <Button
            style={{
              color: "black",
              border: "1px solid #000000",
              borderRadius: "53px",
              marginRight: "2vw",
              width: "8vw",
            }}
            onClick={() => loginAdministrator()}
          >
            Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderView;
