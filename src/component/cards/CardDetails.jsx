import { Typography } from "@mui/material";
import React from "react";

const CardDetails = ({ data }) => {
  let total_price = 0;

  const totalPrice = () => {
    const discount = (data.price * data.discountPercentage) / 100;
    total_price = data.price + discount;
  };

  totalPrice(); 

  return (
    <>
      <Typography variant="h3">{data.title}</Typography>
      <Typography>{data.description}</Typography>
      <Typography variant="body2" sx={{ color: "gray" }}>
        Special Price
      </Typography>
      <Typography variant="h3">
        &#8377;{data.price}{" "}
        <span style={{ fontSize: "medium", color: "gray" }}>
          <span style={{ textDecoration: "line-through" }}>{total_price}</span>{" "}
          {data.discountPercentage}% off
        </span>
      </Typography>
    </>
  );
};

export default CardDetails;
