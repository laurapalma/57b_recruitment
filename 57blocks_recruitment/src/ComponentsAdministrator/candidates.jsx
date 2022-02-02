import React from "react";
import TableCandidate from "./tableCandidate.jsx";
import { Box, Grid, Typography } from "@mui/material/";

const Candidates = () => {
  return (
    <>
      <Grid
        container
        spacing={1}
        direction="column"
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
