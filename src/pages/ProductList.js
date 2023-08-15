import React from 'react';
import { styled } from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';

const Container = styled.div`

`;

const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        
    </Container>
  )
}

export default ProductList
