import React from "react";
import ValidationApplyForm from "../ComponentsCandidate/ComponentsThirdView/ValidationApplyForm.jsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Container, IconButton } from "@material-ui/core";
import { AppBar, Toolbar } from "@mui/material";

const ApplyForm = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            minHeight: "5rem",
            bgcolor: "#FAFAFA",
            paddingRight: "0",
            paddingLeft: "0",
          }}
        >
          <IconButton
            size="medium"
            edge="start"
            aria-label="apply"
          ></IconButton>
          <Button
            style={{
              fontSize: 24,
              textTransform: "capitalize",
            }}
            startIcon={<ArrowBackIcon fontSize="24px" />}
          >
            Apply
          </Button>
        </Toolbar>
      </AppBar>
      <Container
        style={{
          maxWidth: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "columns",
          backgroundColor: "#3CDFF5",
          margin: "0",
        }}
      >
        <ValidationApplyForm />
      </Container>
    </>
  );
};
export default ApplyForm;
