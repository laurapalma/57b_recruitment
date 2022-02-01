import React from "react";
import { Box, Snackbar } from "@mui/material/";
import { CopyToClipboard } from "react-copy-to-clipboard";

import shareLink from "./img/share_link.svg";
import shareFb from "./img/share_fb.svg";
import shareIn from "./img/share_in.svg";

const ShareOffer = ({ linkJob }) => {
  const url = document.URL;

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: { xs: 2, md: 5 },
        marginX: 3,
      }}
    >
      <CopyToClipboard text={url + linkJob}>
        <img
          src={shareLink}
          alt="share_link"
          onClick={handleClick({
            vertical: "top",
            horizontal: "right",
          })}
        ></img>
      </CopyToClipboard>
      <Snackbar
        sx={{
          backgroundColor: "#F4F6F9",
          width: { xs: 150, md: 200, lg: 250 },
        }}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Copied Link!"
        key={vertical + horizontal}
        autoHideDuration={4000}
      />

      <img src={shareFb} alt="share_facebook"></img>
      <img src={shareIn} alt="share_linkedIn"></img>
    </Box>
  );
};
export default ShareOffer;
