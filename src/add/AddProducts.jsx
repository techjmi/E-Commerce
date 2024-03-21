
import React, { useEffect } from 'react';
import productsData from '../data/data';
// import productsData from './data';

const AddProducts = () => {
  useEffect(() => {
    const addProductsToAPI = async () => {
      try {
        for (let i = 0; i < productsData.length; i++) {
          const product = productsData[i];
          const response = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
          });

          if (!response.ok) {
            console.error(`Failed to add product: ${product.title}`);
          } else {
            console.log(`Product added successfully: ${product.title}`);
          }
        }
      } catch (error) {
        console.error('Error adding products:', error);
      }
    };

    addProductsToAPI();
  }, []);

  return (
    <div>
      <h2>Populating Products</h2>
    </div>
  );
}

export default AddProducts;

