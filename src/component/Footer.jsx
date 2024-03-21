import { Box, Typography, styled } from "@mui/material";
import React from "react";
const BoxWrapper = styled(Box)({
  // display:"flex",
  // margin:"auto",
  background: "#212121",
});
const BoxMain = styled(Box)({
  // margin:"1rem",
  display: "flex",
  justifyContent: "space-between",
  borderTop: "1px solid #f5f5f5",
  marginTop: "30px",
  color: "#fff",
  padding: "1rem 5rem",
  // width:"90%"
});
const BoxFooter = styled(Box)({
  alignItems: "center",
  // textAlign:"center",
  textAlign: "justify",
  // borderRight:"1px solid white"
});
const BoxCopy = styled(Box)({
  borderTop: "1px solid rgba(360, 360, 360, .30)",
  paddingBottom: "1rem",
});
const Footer = () => {
  return (
    <BoxWrapper>
      <BoxMain className="box_footer">
        <BoxFooter>
          <Typography sx={{ mb: "5px", color: "gray" }}>About</Typography>
          <Typography>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              Contact Us
            </a>
          </Typography>
          <Typography>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              About Us
            </a>
          </Typography>
          <Typography>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              Career
            </a>
          </Typography>
        </BoxFooter>
        <BoxFooter>
          <Typography sx={{ mb: "5px", color: "gray" }}>
            Consumer Policy
          </Typography>
          <Typography>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              Cancellation &Return
            </a>
          </Typography>
          <Typography>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              Terms Of Use
            </a>
          </Typography>
          <Typography>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              Security
            </a>
          </Typography>
          <Typography>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              Privacy
            </a>
          </Typography>
        </BoxFooter>
        <BoxFooter>
          <Typography sx={{ mb: "5px", color: "gray" }}>Help</Typography>
          <Typography>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              Payment
            </a>
          </Typography>
          <Typography>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              Shipping
            </a>
          </Typography>
          <Typography>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              FAQs
            </a>
          </Typography>
          <Typography>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              Return
            </a>
          </Typography>
        </BoxFooter>
        <BoxFooter>
          <Typography sx={{ mb: "5px", color: "gray" }}>Help</Typography>
          <Typography>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              Payment
            </a>
          </Typography>
          <Typography>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              Shipping
            </a>
          </Typography>
          <Typography>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              FAQs
            </a>
          </Typography>
          <Typography>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              Return
            </a>
          </Typography>
        </BoxFooter>
      </BoxMain>
      <BoxCopy>
        <Typography
          sx={{ textAlign: "center", color: "white", marginTop: "10px" }}
        >
          Copyright &copy; 2024{" "}
          <span>
            Designed By{" "}
            <a
              href="https://chic-lollipop-cd173a.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Md Shamim Akhter
            </a>
          </span>
        </Typography>
      </BoxCopy>
    </BoxWrapper>
  );
};

export default Footer;
