import './App.css';
import Header from './component/header/Header';
// import Products from './component/cards/';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetails from './component/cards/ItemDetails';
import Home from './component/Home';
// import CartItem from './component/cart/CartPage';
import CartPage from './component/cart/CartPage';
import AddProducts from './add/AddProducts';
import Footer from './component/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
  {/* <Banner /> */}
  <Routes>
  <Route path='/' element={<Home/>} />
    <Route path='/details/:id' element={<ItemDetails />} />
    <Route path='/cart' element={<CartPage />} />
    <Route path='/add' element={<AddProducts />} />
  </Routes>
  <Footer />
  </BrowserRouter>
    </>
  
  );
}

export default App;
