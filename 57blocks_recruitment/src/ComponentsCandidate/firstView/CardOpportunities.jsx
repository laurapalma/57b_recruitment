import React from "react";
import { Card, CardContent, Typography } from "@mui/material/";
import "../componentsCandidate.css";

const CardOpportunities = ({ item }) => {
  return (
    <Card
      sx={{
        display: "flex",
        width: { xs: 343, md: 378 },
        height: { xs: 104, md: 172 },
        justifyContent: { xs: "center", md: "center" },
        alignItems: { xs: "center", md: "center" },
        flexDirection: { xs: "column", md: "row" },
        marginTop: { xs: 3 },
      }}
      spacing={8}
      elevation={3}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          alignItems: { xs: "center", md: "center" },
        }}
      >
        <img src={item.icon} alt="icons" className="mini_icons" />
        <Typography
          sx={{ fontSize: { xs: 16, md: 18 }, marginLeft: { xs: 3 } }}
          variant="p"
        >
          {item.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardOpportunities;
