import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const HeaderView = () => {
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
        <img
          src={logo}
          alt=""
          style={{ marginRight: "25vw", marginLeft: "5vw" }}
        />
        <Button style={{ color: "black", border: "none", marginRight: "5vw" }}>
          Services
        </Button>
        <Button style={{ color: "black", border: "none", marginRight: "5vw" }}>
          Why Us
        </Button>
        <Button style={{ color: "black", border: "none", marginRight: "5vw" }}>
          About
        </Button>
        <Button style={{ color: "black", border: "none", marginRight: "5vw" }}>
          Careers
        </Button>
        <Link to="table-candidates">
          <Button
            style={{
              color: "black",
              border: "1px solid #000000",
              borderRadius: "53px",
              marginRight: "2vw",
              width: "8vw",
            }}
          >
            Login
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderView;
