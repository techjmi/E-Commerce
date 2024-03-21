
import React, { useContext, } from 'react';
import { DataContext } from '../../context/Dataprovider';
// import Box from '@mui/material/Box'; 
import { styled , Box} from '@mui/material';
import CartItem from './CartItem';
import Price from './Price';
import EmptyCart from './EmptyCart';
const BoxStyle= styled(Box)({
    // marginTop:"20px",
    // backgroundColor:"gray",
    // margin:"2px",
    borderRadius:"5px",
    marginTop:"1rem",
    width:"65%",
    // padding:"10px",
    height:"90vh",
    flexDirection:"row",
    overflow:"scroll",
    scrollbarWidth:"none"

})
const BoxCart= styled(Box)({
  backgroundColor:"#f1f3f6",
  display:"flex",
  flexDirection:"column",
 
})
const BoxWrapper= styled(Box)({
  display:"flex"
})
const BoxPrice= styled(Box)({
  width:"30%",
  position:"relative"
})
const CartPage = () => {
  const { cart } = useContext(DataContext);
  
  // console.log("the cart", cart)
  const removeDuplicates = (array, key) => {
    const uniqueKeys = new Set();
    return array.filter(item => {
      if (!uniqueKeys.has(item[key])) {
        uniqueKeys.add(item[key]);
        return true;
      }
      return false;
    });
  };

  // Remove duplicates from the cart array based on the 'id' key
  const uniqueCart = removeDuplicates(cart, 'id');
  return (
    <>
  {cart.length ? (
    <BoxWrapper>
      <BoxStyle>
        {uniqueCart.map((item, index) => (
          <BoxCart key={index}> 
            <CartItem item={item} />
          </BoxCart>
        ))}
      </BoxStyle>
      <BoxPrice>
        <Price cart={cart} />
      </BoxPrice>
    </BoxWrapper>
  ) : (
    <EmptyCart />
  )}
</>

  );
};

export default CartPage;
