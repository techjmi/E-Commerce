import React from 'react'
import Products from './cards/Products'
import Banner from './Banner'

const Home = () => {
  return (
    <>
    <Banner />
     <Products category='smartphones' heading="Best of Smart Phones"/>
  <Products category="laptops" heading="Best of Laptops"/>
  <Products category="skincare" heading="Skin Care &Health Products"/>
  <Products category="groceries" heading="Kitchen &Groceries"/>
  <Products category="home-decoration" heading="Home & Decoration"/>
  <Products category="womens-dresses" heading="Women Clothes"/>
  {/* <Products category={["womens-dresses", "mens-shirt"]}  heading="Women Clothes"/> */}
  {/* <Products categories={ProductsCategories} heading="Clothes" /> */}
  <Products category="mens-shirts" heading="Man Clthes"/>
    </>
  )
}

export default Home
