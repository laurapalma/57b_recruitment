import React from "react";
import { Box, Typography } from "@mui/material/";

import CardOpportunities from "./CardOpportunities";
import HeaderViews from "../HeaderViews";
import icoUser from "../img/icoData.svg";
import icoWeb from "../img/ico-web.svg";
import icoBlockchain from "../img/icoBlockchain.svg";
import "../componentsCandidate.css";

const productBlockchain = [
  {
    id: "1",
    text: "Product co-creation & blockchain",
    icon: icoBlockchain,
  },
  {
    id: "2",
    text: "Product Quality Automation",
    icon: icoWeb,
  },
  {
    id: "3",
    text: "Dedicated Product Team",
    icon: icoUser,
  },
];

const JobOpportunities = () => {
  return (
    <>
      <HeaderViews />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        flexDirection="column"
        color="text.primary"
        bgcolor="#F7FBFE"
        paddingTop={{ xs: 3, md: 10 }}
        paddingBottom={{ xs: 7, md: 10 }}
      >
        <span className="img_title"></span>
        <Typography
          variant="p"
          sx={{
            width: { md: 1156 },
            height: { md: 64 },
            fontSize: { xs: 16, md: 18 },
            fontWeight: 400,
            marginLeft: { xs: 2 },
            marginRight: { xs: 2 },
            marginTop: 5,
          }}
        >
          Great products are built block by block. 57BLOCKS is redefining how
          products are built, applying a combination of technology and process
          improvements to deliver a new kind of distributed development
          experience.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 18, md: 30 },
            fontWeight: 600,
            marginTop: { xs: 7, md: 9 },
            marginBottom: { xs: 5, md: 7 },
          }}
        >
          We Got Three Main Products
        </Typography>
        <div className="container_cards">
          {productBlockchain.map((product) => (
            <CardOpportunities key={product.id} item={product} />
          ))}
        </div>
      </Box>
    </>
  );
};

export default JobOpportunities;

/*<img
src={icoTitle}
alt="ico-Title"
sx={{ width: { xs: 300, md: 417 } }}
/>*/
