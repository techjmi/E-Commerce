import React from 'react'
import { bannerData } from '../constant/data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import styled from "@emotion/styled";
// import {Box }from '@mui/material';
import { Box, Typography , styled} from '@mui/material'

const Banner = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
      //styling
      const Image = styled('img')({
        width: '100%',
        height: 200,
        objectFit:"cover"
      })
      const BoxStyle=styled(Box)({
        margin: "10px"
      })

  return (
    <BoxStyle>
    <Carousel
    responsive={responsive}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    containerClass="carousel-container"
    swipeable={false}
draggable={false}
infinite={true}
autoPlay={true}  // Enable automatic sliding
autoPlaySpeed={3000} 
  >
    {bannerData.map((data) => (
        // <img src={data.url}
      <Image key={data.id} src={data.url} alt="banner"/>
    ))}
  </Carousel>
</BoxStyle>
  )
}

export default Banner