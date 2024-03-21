
import React, { useContext } from 'react';
import { DataContext } from '../../context/Dataprovider';
import { Box, Divider, Typography, styled } from '@mui/material';

const BoxWrapper = styled(Box)({
  backgroundColor: "#FFFFF0",
  margin: "1rem .5rem",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  padding: "1rem"
});

const Price = () => {
  const { cart } = useContext(DataContext);

// total original price of all items in the cart
const totalPrice = Math.round(cart.reduce((total, item) => total + item.price, 0));
const deliveryCharge=totalPrice<500?50:0
const AmountTopay=totalPrice+deliveryCharge
//total discount amount based on the discount percentage for each item
const totalDiscount = Math.round(cart.reduce((total, item) => {
  //actual price of the item based on discount percentage
  const actualPrice = item.price / (1 - item.discountPercentage / 100);
  // Calculate discount amount for this item
  const discountAmount = item.price - actualPrice;
  // Add discount amount to total
  return total + discountAmount;
}, 0));


  return (
    <BoxWrapper>
      <Typography sx={{ marginBottom: "1rem" }}>PRICE DETAILS</Typography>
      <Divider />
      <Box sx={{ display: "flex", justifyContent: "space-between", mb:".5rem"}}>
        <Typography>Price ({cart.length} items)</Typography>
        <Typography> &#8377;{totalPrice}</Typography>
      </Box>
      <Box sx={{display:"flex", justifyContent:"space-between" ,mb:".5rem"}}>
        <Typography>Total Discount</Typography>
        <Typography> &#8377;{totalDiscount}</Typography>
      </Box>
      <Box  sx={{display:"flex", justifyContent:"space-between", mb:".5rem"}}>
        <Typography>Delivery Charges </Typography>
        <Typography> &#8377;{deliveryCharge}</Typography>
      </Box>
      <Divider />
      <Box sx={{display:"flex", justifyContent:"space-between", mb:".5rem", mt:".5rem"}}>
        <Typography sx={{ fontWeight: "bold" }}>Total Amount to Pay</Typography>
        <Typography sx={{ fontWeight: "bold" }}> &#8377;{AmountTopay}</Typography>
      </Box>
    </BoxWrapper>
  );
};

export default Price;
