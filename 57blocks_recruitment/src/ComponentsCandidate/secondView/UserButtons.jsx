import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const UserButtons = ({ textContent }) => {
  return (
    <Button
      sx={{
        width: { xs: 100, md: 115 },
        height: { xs: 32, md: 38 },
        borderRadius: 33,
        paddingX: 5,
        textTransform: "capitalize",
        marginTop: { xs: 1, md: 3 },
      }}
      variant="outlined"
      color="primary"
      component={Link}
      to={"apply-job"}
    >
      {textContent}
    </Button>
  );
};

export default UserButtons;
