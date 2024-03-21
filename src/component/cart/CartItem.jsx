import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import React, { useContext, } from 'react';
import { DataContext } from '../../context/Dataprovider';

const BoxWrapper = styled(Box)({
  width: "90%",
  margin: "auto",
  display: "flex",
  gap: "10px",
  marginTop: "1rem",
  paddingBottom:".5rem",
//   backgroundColor:"blue",
  borderBottom:"1px solid rgba(0,0,0,.5)"
});

const ImgStyled = styled("img")({
  height: "200px",
  width: "200px"
});

const BoxImg = styled(Box)({
  display: "flex",
  flexDirection: "column"
});

const BoxButton = styled(Box)({
  marginTop: "20px",
  display: "flex",
  gap: ".5rem"
});

const CartItem = ({ item }) => {
  const { count ,cart, addToCart} = useContext(DataContext);
  const removeItem = () => {
    // Filter out the item to remove from the cart
    const updatedCart = cart.filter(product => product.id !== item.id);
    // Update the cart state
    addToCart(updatedCart);
  };
  return (
    <BoxWrapper>
      <BoxImg>
        <ImgStyled src={item.images[0]} alt='' />
        <BoxButton>
          <Button variant='contained'>+</Button>
          <Button variant='outlined'>{count}</Button>
          <Button variant='contained'>-</Button>
        </BoxButton>
      </BoxImg>
      <Box sx={{display:"flex", justifyContent:"space-between",flexDirection:"column", marginLeft:"1rem"}}>
        <Box>
        <Typography>{item.title}</Typography>
        <Typography>&#8377;{item.price}</Typography>
        </Box>
       
        <Box>
        <Button sx={{color:"black"}} onClick={removeItem}>Remove</Button>
      </Box>
      </Box>
      
    </BoxWrapper>
  );
}

export default CartItem;
