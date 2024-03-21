import React from "react";
import { Box, Button, Divider, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
const url =
  "https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  const BoxMain=styled(Box)({
    backgroundColor:"#f1f3f6",
    borderBottom:"1px solid rgba(0,0,0,.30)",
    marginTop:0
  })
  const BoxWrapper= styled(Box)({
   backgroundColor:"#fff" ,
// backgroundColor:"GrayText",
   boxSizing:"border-box",
   margin:'1rem',
   padding:"30px 0 36px",
   textAlign:"center",
   boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"
  })
  const ImgStyled= styled("img")({
    height:"190px",
    outline:"none"
  })
  const ButtonStyle= styled(Button)({
    fontSize: '14px',
    marginTop: '20px',
    fontWeight: '400',
    padding: '8px 50px'
  })
const EmptyCart = () => {
    return(
<BoxMain>
<BoxWrapper>
    <ImgStyled src={url} alt="" />
    <Typography variant="h6">Your Cart Is Empty!</Typography>
    <Typography  sx={{marginTop:"10px"}}>Add Items to it Now</Typography>
    <ButtonStyle variant="contained" component={Link} to={"/"}>Shop Now</ButtonStyle>
</BoxWrapper>
<Divider />
</BoxMain>
    )
 
};

export default EmptyCart;
