import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AppBar, Toolbar } from "@mui/material";
import { Button, IconButton } from "@material-ui/core";

import WhatWillYouDo from "../ComponentsCandidate/secondView/WhatWillYouDo.jsx";
import OpportunityConditions from "../ComponentsCandidate/secondView/OpportunityConditions.jsx";
import OfferButtons from "../ComponentsCandidate/UserButtons.jsx";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const experienceItems = [
  "Have at least four years of experience with React.js",
  "Possess extensive knowledge of JavaScript and web stacks, libraries, and frameworks.",
  "Offer interpersonal, communication, and collaboration skills.",
];
const perkItems = [
  "Personalized salary.",
  "100% Health insurance.",
  "Be treated like a Talent, not a number.",
];
const OpportunityDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);

  const conection = () => {
    axios
      .get(`https://stormy-river-28303.herokuapp.com/api/v1/jobs/${id}`)
      .then(
        (result) => {
          console.log("data", result.data);
          setJob(result.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    conection();
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
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
            <Link to="/">
              <Button
                style={{
                  fontSize: 24,
                  textTransform: "capitalize",
                }}
                startIcon={<ArrowBackIcon fontSize="24px" />}
              >
                <h4>{job && job.name}</h4>
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <WhatWillYouDo />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <OpportunityConditions kind="experience" items={experienceItems} />
        <OpportunityConditions kind="perk" items={perkItems} />
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginX: 5 }}>
        <Link to="/apply">
          <OfferButtons textContent="Apply" />
        </Link>
        <OfferButtons textContent="Refer" />
      </div>
    </div>
  );
};

export default OpportunityDetails;
