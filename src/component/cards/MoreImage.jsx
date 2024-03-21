import { Box, Typography, styled } from '@mui/material';
import React from 'react'
const BoxStyle= styled(Box)({
    width:"90%",
    margin:"auto",
    // backgroundColor:"greenyellow",
    display:"flex",
    gap:".5rem",
    flexWrap:"wrap",
paddingBottom:"2rem"
})

const ImgStyle = styled('img')({
  width: '200px',
  height: '250px',
  transition: 'transform 0.2s ease-in-out', 
  '&:hover': {
    transform: 'scale(1.1)', 
    cursor:"pointer"
  },
});
const MoreImage = ({ image }) => {
    return (
        <>
         <Typography variant='h3'sx={{textAlign:"center", margin:"1rem 0"}}>More Images from Gallery</Typography>
         <BoxStyle className='img_more'>
        {image.images.map((image, index) => (
          <ImgStyle key={index} src={image} alt='more image'/>
        ))}
      </BoxStyle>
        </>
   
    );
  };
  
  export default MoreImage;
  
  
