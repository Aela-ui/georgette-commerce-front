'use client';

import { findAllProducts } from '@/api/api';
import ProductCardComponent from './ProductCardComponent';
import {Box, Typography, Divider} from '@mui/material';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const ProductCardList = ({ data }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist){
      const newCartItems = cartItems.map((x) =>
      x.id === product.id? { ...exist, qty: exist.qty + 1} : x
      );
      setCartItems(newCartItems);
    }else{
      const newCartItems = [...cartItems, { ...product, qty: 1}];
      setCartItems(newCartItems);
    }
  }

  const removeToCart = (product) => {
    
  }

    return(
      <>
        {data.map((product) => (
          <ProductCardComponent 
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeToCart={removeToCart}
          />
        ))}
      </>
    )
}

const ProductCardFeedComponent = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
      const callApiFindAllProducts = async() => {
          const {payload} = await findAllProducts();
          setRows(payload);
          console.log(payload)
      }

      try {
        callApiFindAllProducts();
      } catch (error) {
          console.log(error);
      }
  }, []);

    return (
        <>
          <section>
            <center>
              <TypoFeed>
                Nossos Tecidos
              </TypoFeed>
              <Divider variant="middle" />
            </center>
          </section>

          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            margin: "auto",
            width: "fit-content",
            justifyContent: 'center',  
            alignItems: 'center',
            '& > :not(style)': {
              m: 4,
              width: 300,
              p:2
            }
          }}>
            <ProductCardList 
              data={rows}
            />
          </Box>
        
        </>
    )
}

const TypoFeed = styled(Typography)`
  font-size: 27px ;
  font-family: 'Dancing Script', cursive;
  font-weight: bold ;
  padding: 9px ;
`


export default ProductCardFeedComponent