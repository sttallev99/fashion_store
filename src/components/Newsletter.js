import React from 'react';
import { styled } from 'styled-components';
import SendIcon from '@mui/icons-material/Send';

import { mobile } from '../responsive';

const Container = styled.div`
    margin: 20px;
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({ width: '100%', margin: '5px'})}
`;

const Title = styled.h1`
    font-size: 70px;7
    margin-bottom: 20px;
`;

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: 'center'})}
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: '80%'})}
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely update from your favorite products.</Description>
      <InputContainer>
        <Input placeholder='Your email'/>
        <Button>
            <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
