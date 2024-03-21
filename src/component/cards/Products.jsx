import { Box, Typography, styled } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { DataContext } from "../../context/Dataprovider";
import Card from "../Card";
import { Link } from "react-router-dom";
const BoxStyle = styled(Box)({
  backgroundColor:"#f1f3f6",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  margin: "10px 12px",
  boxShadow:
    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  gap: "10px",
  padding:"1rem 2rem"
});
const BoxProdcuts = styled(Box)({
  display: "flex",
  overflow: "hidden",
  // backgroundColor:"gray",
  gap: "10px",
  maxWidth: "100%",
  textAlign:"center",
  margin:"auto"
  // display:"block"
});
const BoxTypo = styled(Box)({
  fontSize: "bold",
  margin: "15px 0",
});
const BoxCard = styled(Box)({
  display: "flex",
  gap: "10px",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  cursor: "pointer",
});

const Products = ({ category, heading }) => {
  const { data, setData } = useContext(DataContext);
  // console.log(category);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=100`
      );
      const responseData = await response.json();
      // console.log("the data is", responseData);
      setData(responseData.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [setData, category]);

  if (!data || data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <BoxStyle className="box_products">
      <BoxTypo>
        <Typography variant="h5">{heading}</Typography>
      </BoxTypo>
   
      <BoxProdcuts>
        {data.map((item) => (
          item.category.includes(category) && (
            <Link to={`/details/${item.id}`} key={item.id} style={{textDecoration:"none", color:"black"}}>
              <BoxCard style={{gap:"2rem"}}>
                <Card data={item} />
              </BoxCard>
            </Link>
          )
        ))}
      </BoxProdcuts>
    </BoxStyle>
  );
};

export default Products;
