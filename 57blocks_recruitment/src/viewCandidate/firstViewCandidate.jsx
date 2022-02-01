import React from "react";
import JobOfferList from "../ComponentsCandidate/JobOfferList.jsx";
import JobOpportunities from "../ComponentsCandidate/JobOpportunities.jsx";

const firstViewCandidate = () => {
  return (
    <>
      <JobOpportunities />
      <JobOfferList />
    </>
  );
};

export default firstViewCandidate;
