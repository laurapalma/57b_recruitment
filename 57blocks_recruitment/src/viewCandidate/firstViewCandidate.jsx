import React from "react";
import JobOfferList from "../ComponentsCandidate/ComponentsFirstView/JobOfferList.jsx";
import JobOpportunities from "../ComponentsCandidate/ComponentsFirstView/JobOpportunities.jsx";

const firstViewCandidate = () => {
  return (
    <>
      <JobOpportunities />
      <JobOfferList />
    </>
  );
};

export default firstViewCandidate;
