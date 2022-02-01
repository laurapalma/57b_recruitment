import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Box, CardContent, Typography, Container } from "@mui/material/";
import axios from "axios";

import UserButtons from "./secondView/UserButtons.jsx";
import ShareOffer from "../ComponentsCandidate/ShareOffer.jsx";

const JobOfferList = () => {
  const [jobCard, setJob] = useState([]);

  const conection = () => {
    axios.get("https://stormy-river-28303.herokuapp.com/api/v1/jobs").then(
      (result) => {
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
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        },
        marginTop: { xs: 10, md: 20 },
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        padding: 0,
      }}
    >
      {jobCard.map((job) => (
        <Card
          key={job.id}
          sx={{
            width: { xs: 343, md: 380 },
            height: { xs: 345, md: 466 },
            borderRadius: 5,
            padding: 0,
            margin: 3,
            marginTop: 0,
          }}
          elevation={3}
        >
          <CardContent>
            <Box
              sx={{
                fontSize: 20,
                position: "relative",
                display: "inline-block",
                "&::before": {
                  content: `""`,
                  position: "absolute",
                  bottom: "14px",
                  width: "calc(100% + 10px)",
                  height: "8px",
                  left: "5px",
                  opacity: "0.3",
                  backgroundColor: "#42E9AF",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 24 },
                  position: "relative",
                  fontWeight: 600,
                  marginLeft: 3,
                  marginTop: { xs: 3, md: 5 },
                }}
                color="primary"
                gutterBottom
              >
                {job.name}
              </Typography>
            </Box>
            <Typography
              sx={{
                textAlign: { xs: "left", md: "justify" },
                marginTop: { xs: 2, md: 3 },
                marginLeft: 3,
                fontSize: { xs: 16, md: 18 },
                maxWidth: 284,
                maxHeight: { xs: 120, md: 130 },
                overflow: "hidden",
                display: "-webkit-box",
              }}
              color="#666666"
              gutterBottom
            >
              {job.summary}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                color: "#00D3EF",
                fontSize: { xs: 13, md: 14 },
                marginRight: { md: 5 },
                marginTop: { xs: 1, md: 2 },
              }}
              component={Link}
              to={`opportunity-detail/${job.id}`}
            >
              {" "}
              View more{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: { xs: 1, md: 3 },
                marginX: 5,
              }}
            >
              <UserButtons textContent="Apply" />
              <UserButtons textContent="Refer" />
            </Box>
            <Box>
              <ShareOffer />
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default JobOfferList;
