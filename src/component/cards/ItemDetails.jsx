import { Box, Button, Grid, styled } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardDetails from './CardDetails';
import MoreImage from './MoreImage';
import { DataContext } from '../../context/Dataprovider';

const BoxStyle= styled(Box)({
  marginTop:"1rem",
  // backgroundColor:"gary",
  width:"90%",
  margin:"auto",
  display:"flex",
  gap:".5rem",
  // backgroundColor:"gold"
})
const BoxPdcts= styled(Box)({
  display:"flex",
  gap:"1rem",
  backgroundColor:"skyblue"

})
const BoxDeatils= styled(Box)({
  // marginTop:"1rem",
  // boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  padding:"10px"
})
const BoxImg= styled(Box)({
  marginTop:"1rem",
  // boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  padding:"10px"
})
const ImgStyle= styled("img")({
  width:"300px",
  height:"auto",

})

const BoxButton= styled(Box)({
marginTop:"1rem"
})
const ButtonStyle=styled(Button)({
  backgroundColor:"orange",
  color:"white",
  marginRight:"1rem"
})
const ItemDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const{cart, addToCart}=useContext(DataContext)
 
  // console.log("the cart is", cart)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProductDetails(data);
        // console.log("data from indi", data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);
//add to cart
const handleAddToCart = () => {
  // Add the product to the cart
  addToCart([...cart, { ...productDetails, quantity: 1 }]);
  // console.log("Item added to cart:", productDetails);
  // Increment the count
 
};


  if (!productDetails) {
    return <div>Loading...</div>;
  }
  // console.log(count)
  return (
    <>
       <BoxStyle>
    <BoxPdcts className='box_details'>
       <BoxImg>
        <ImgStyle src={productDetails.images[0]} alt='' />
        <BoxButton>
<ButtonStyle onClick={handleAddToCart}>Add To Cart</ButtonStyle>
<ButtonStyle>Buy Now</ButtonStyle>
        </BoxButton>
       </BoxImg>
       
    <BoxDeatils>
     <CardDetails data={productDetails}/>
    </BoxDeatils>
    </BoxPdcts>
   {/* <BoxPrice>price</BoxPrice> */}
   </BoxStyle>
   <Box className="">
    <MoreImage image={productDetails}/>
   </Box>
    </>

  );
};

export default ItemDetails;
