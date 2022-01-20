import React from "react";
import JobOfferList from "../ComponentsCandidate/firstView/JobOfferList.jsx";
import JobOpportunities from "../ComponentsCandidate/firstView/JobOpportunities.jsx";
import HeaderView from "./HeaderViews.jsx";

const firstViewCandidate = () => {
  return (
    <>
      <HeaderView />
      <JobOpportunities />
      <JobOfferList />
    </>
  );
};

export default firstViewCandidate;
