import { React, useState } from "react";
import { Select, MenuItem } from "@mui/material";
import axios from "axios";

const CandidateStatus = ({ statuses, currentStatus, candidateId }) => {
  const [stateCandidate, setStateCandidate] = useState("");

  const setCandidateStatus = (body) => {
    axios
      .patch(
        `https://stormy-river-28303.herokuapp.com/api/v1/candidates/${candidateId}`,
        body
      )
      .then(
        (result) => {
          console.log("data", result.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const handleChange = (event) => {
    const newData = {
      candidateStatusId: event.target.value,
    };
    setCandidateStatus(newData);
    setStateCandidate(event.target.value);
  };
  return (
    <div>
      <Select
        value={stateCandidate || currentStatus}
        onChange={(e) => handleChange(e)}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        {statuses.map((statusCandidate) => {
          console.log(statusCandidate);
          return (
            <MenuItem value={statusCandidate.id}>
              {statusCandidate.status}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
};
export default CandidateStatus;
