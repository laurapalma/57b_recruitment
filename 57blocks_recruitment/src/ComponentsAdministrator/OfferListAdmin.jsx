import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import view from "../images/view.svg";
import edit from "../images/edit.svg";
import trash from "../images/trash.svg";
import HeaderView from "../viewCandidate/HeaderViews.jsx";

import axios from "axios";

const OfferListAdmin = () => {
  const [jobCard, setJob] = useState([]);

  const conection = () => {
    axios.get("https://stormy-river-28303.herokuapp.com/api/v1/jobs").then(
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

  const handleClick = () => {
    window.location = "create-new-opportunity";
  };

  const handleDelete = (job) => {
    //confirmar acción
    axios
      .delete(`https://stormy-river-28303.herokuapp.com/api/v1/jobs/${job.id}`)
      .then((res) => {
        //to do mostrar mensaje de confirmación
        conection();
      });
  };

  return (
    <>
      <HeaderView />
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          marginTop: 50,
          marginRight: 110,
        }}
      >
        <Button
          sx={{
            textTransform: "capitalize",
            marginX: 5,
            backgroundColor: "#2B7BF4",
          }}
          variant="contained"
          onClick={handleClick}
        >
          + Create new job
        </Button>
      </div>

      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gridGap: "1.3vh",
          marginTop: "5%",
          height: "auto",
        }}
      >
        {jobCard.map((job) => (
          <Card
            key={job.id}
            sx={{
              maxWidth: 300,
              borderRadius: 5,
              padding: "1rem",
              margin: 4,
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
                    bottom: "12px",
                    width: "calc(100% + 10px)",
                    height: "8px",
                    left: "-5px",
                    opacity: "0.5",
                    backgroundColor: "#42E9AF",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    position: "relative",
                    fontWeight: "bold",
                  }}
                  color="primary"
                  gutterBottom
                >
                  {job.name}
                </Typography>
              </Box>
              <Typography
                sx={{ textAlign: "justify", marginY: 4 }}
                color="textSecondary"
                gutterBottom
              >
                {job.summary}
              </Typography>
              <Link
                to="opportunity-detail/:id"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  color: "#00D3EF",
                }}
              >
                {" "}
                View more{" "}
              </Link>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "3rem",
                  marginX: 5,
                }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Button>
                    <img src={view} alt="view" />
                  </Button>
                  <Button>
                    <img src={edit} alt="edit" />
                  </Button>
                  <Button onClick={() => handleDelete(job)}>
                    <img src={trash} alt="trash" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default OfferListAdmin;
