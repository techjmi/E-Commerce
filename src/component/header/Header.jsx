
import React, {useContext, useRef} from 'react';
import { DataContext } from '../../context/Dataprovider';
import Search from './Search';
import { Link } from 'react-router-dom';
import { Badge, Box, Typography, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
const BoxCart= styled(Box)({
display:"flex",
gap:".5rem"
})
const Header = () => {
const menuListRef = useRef(null);
const handleOpenMenu = () => {
  if (menuListRef.current) {
    menuListRef.current.style.top = 0;
  }
};

const handleCloseMenu = () => {
  if (menuListRef.current) {
    menuListRef.current.style.top = '-700%';
  }
};
const{cart} = useContext(DataContext)
  return (
    <>
      <div className="header">
        <ul className='menu_list'ref={menuListRef}>
          <li>
          <Link to="/" style={{textDecoration:"none", color:"white"}}> Home</Link>
          </li>
          
          <li>About</li>
          {/* <li>{cart.id}</li> */}
          <li>
          <BoxCart>
            <Box>
            <Badge badgeContent={cart?.length} color="secondary">
            <ShoppingCartIcon/>
            </Badge>
            </Box>
           <Link to="/cart" style={{textDecoration:"none", color:"white"}} >
           <Typography>Cart</Typography>
           </Link>
           
          </BoxCart>
          </li>
          <div className="humburger_cross"onClick={handleCloseMenu}>
           <CloseIcon />
    </div>
        </ul>
        <div className="login_search">
        <div className="search">
      <Search />
        </div>
        <div className="button">
          <button>Login</button>
        </div>
        <div className="humberger-bars"onClick={handleOpenMenu}>
<MenuIcon />
        </div>
        </div>
      </div>
    </>
  );
};

export default Header;
