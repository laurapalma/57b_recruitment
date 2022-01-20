import React from "react";
import { Link } from "react-router-dom";
import WhatWillYouDo from "./WhatWillYouDo.jsx";
import OpportunityConditions from "./OpportunityConditions.jsx";
import UserButtons from "./UserButtons.jsx";
import ShareOportunity from "./ShareOportunity.jsx";

// Data de prueba.
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
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <WhatWillYouDo />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <OpportunityConditions kind="experience" items={experienceItems} />
        <OpportunityConditions kind="perk" items={perkItems} />
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginX: 5 }}>
        <Link to="/apply">
          <UserButtons textContent="Apply" />
        </Link>
        <UserButtons textContent="Refer" />
      </div>

      <div>
        <ShareOportunity />
      </div>
    </>
  );
};

export default OpportunityDetails;
