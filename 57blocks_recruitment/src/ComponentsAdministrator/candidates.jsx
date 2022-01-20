import React from "react";
import TableCandidate from "./tableCandidate.jsx";
import { Box, Grid, Typography } from "@mui/material/";
import HeaderViews from "../viewCandidate/HeaderViews.jsx";

const Candidates = () => {
  return (
    <>
      <HeaderViews />
      <Grid
        container
        spacing={1}
        direction="column"
        spacing={5}
        justifyContent="center"
        alignItems="center"
        marginTop="50"
      >
        <Grid item gl={12}>
          <Box justifyContent="flex-start" textAlign="left">
            <Typography gl={{ fontSize: "28px" }} variant="h4" gutterBottom>
              Candidates
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <TableCandidate />
        </Grid>
      </Grid>
    </>
  );
};

export default Candidates;
