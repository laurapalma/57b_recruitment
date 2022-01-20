import { React, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/";
import CandidateStatus from "./CandidateStatus.jsx";
import {
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  Grid,
} from "@mui/material/";
import axios from "axios";
import iconImport from "./img/Import.svg";
import iconText from "./img/iconText.svg";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F4F6F9",
    color: theme.palette.common.dark,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TableCandidate = () => {
  const [candidates, setCandidates] = useState([]);
  const [statusCandidates, setStatusCandidates] = useState([]);

  const getAllCandidates = () => {
    axios
      .get("https://stormy-river-28303.herokuapp.com/api/v1/candidates")
      .then(
        (result) => {
          console.log("data", result.data);
          setCandidates(result.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const getCandidateStatuses = () => {
    axios
      .get("https://stormy-river-28303.herokuapp.com/api/v1/candidate-status")
      .then(
        (result) => {
          console.log("data", result.data);
          setStatusCandidates(result.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    getAllCandidates();
    getCandidateStatuses();
  }, []);

  return (
    <Grid
      container
      spacing={1}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow style={{ width: "90vw" }}>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell align="left">Job</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Phone</StyledTableCell>
                <StyledTableCell align="left">Linkedin</StyledTableCell>
                <StyledTableCell align="left">English</StyledTableCell>
                <StyledTableCell align="left">Resume</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {candidates.map((candidate) => (
                <StyledTableRow key={candidate.id}>
                  <StyledTableCell component="th" scope="row">
                    {candidate.createdAt}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {candidate.jobId}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {candidate.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {candidate.email}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {candidate.phone}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {candidate.linkedIn}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {candidate.englishLevelId}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <img src={iconImport} alt="iconImport" />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <CandidateStatus
                      statuses={statusCandidates}
                      currentStatus={candidate.candidateStatusId}
                      candidateId={candidate.id}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <img src={iconText} alt="iconText" />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default TableCandidate;
