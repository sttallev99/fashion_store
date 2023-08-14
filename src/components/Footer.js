import React from 'react';
import { styled } from 'styled-components';


const Container = styled.div`

`;

const Left = styled.div`
    flex: 1;
`;

const Center = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Fashion Store</Logo>
        <Description>
            There are many variations of passages of Lorem Inpum available, 
            but the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly believable.
        </Description>
      </Left>
      <Center>Center</Center>
      <Right>Right</Right>
    </Container>
  )
}

export default Footer
