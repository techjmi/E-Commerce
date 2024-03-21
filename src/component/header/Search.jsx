
import React, { useContext } from 'react';
import Dataprovider, { DataContext } from '../../context/Dataprovider';
import { List, ListItem, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const Search = () => {
  const { input, setInput, data } = useContext(DataContext);

  const handleInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setInput(inputValue);
  };
  const ListWrapper = styled(List)({
    width:"31.5%",
    textAlign:"center",
    position: "absolute",
    left:"31.8%",
    borderRadius:"5px",
    backgroundColor: "#FEEBEB",
    color: "#333333",
    marginTop: "1.2rem",
    display:"flex",
    // margin:"auto",
    flexDirection:"column",
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  });
const ListItemStyle= styled(ListItem)({
    margin:"1px 0"
})
  const filteredProducts = data.filter(product =>
    product.title.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Search Your Products..."
        className='input-field'
      />

      {input && (
        <ListWrapper>
          {filteredProducts.map(product => (
            <ListItemStyle key={product.id}>
            <Link to={`/details/${product.id}`} > {product.title}</Link>
             
            </ListItemStyle>
          ))}
        </ListWrapper>
      )}
    </>
  );
};

export default Search;
