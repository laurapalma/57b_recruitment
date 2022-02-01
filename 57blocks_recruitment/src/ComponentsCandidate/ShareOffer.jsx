import React from "react";
import { Box } from "@mui/material/";

import shareLink from "./img/share_link.svg";
import shareFb from "./img/share_fb.svg";
import shareIn from "./img/share_in.svg";

const ShareOffer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: { xs: 2, md: 5 },
        marginX: 5,
      }}
    >
      <img src={shareLink} alt="share_link"></img>
      <img src={shareFb} alt="share_facebook"></img>
      <img src={shareIn} alt="share_linkedIn"></img>
    </Box>
  );
};
export default ShareOffer;
