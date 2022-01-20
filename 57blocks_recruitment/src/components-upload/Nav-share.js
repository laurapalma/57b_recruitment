//import Icon from "@mui/material/Icon";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const ShareOportunity = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 70,
        }}
      >
        <Box  style={{alignItems: "center", display:"flex", }}>
        <InsertLinkIcon color="primary" fontSize="large" />
          <Link style={{ textDecoration: "none" , marginLeft:10}} href="">
            Share
          </Link>
        </Box>
          
        
        <Box style={{alignItems:"center", display:"flex" }}>
          <FacebookIcon color="primary" fontSize="large" />
          <Link
            style={{ textDecoration: "none",  marginLeft:10 }}
            href="https://www.facebook.com"
          >
            Share
          </Link>
          </Box>
        <Box style={{alignItems: "center", display:"flex" }}>
          <LinkedInIcon color="primary" fontSize="large" />
          <Link
            style={{ textDecoration: "none",  marginLeft:10 }}
            href="https://www.linkedin.com"
          >
            Share
          </Link>
          </Box>
      </Box>
    </>
  );
};
export default ShareOportunity;
