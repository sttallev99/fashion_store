import React from 'react'
import { styled } from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(255,255,255,0.5), 
            rgba(255,255,255,0.5)
        ), 
        url('https://img.freepik.com/free-photo/high-fashion-look-glamor-portrait-beautiful-sexy-stylish-caucasian-young-woman-model-black-cloth_158538-1965.jpg?w=1060&t=st=1692200110~exp=1692200710~hmac=52801fc79b3b3e00ab45dea1b957311c34c21e4aab60fa4c5d34d00f73f61fbd') no-repeat center;
    background-size: cover;
    display: flex;
`;

const Wrapper = styled.div`
    background-color: teal;
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 40%;
    margin: auto 0;
    margin-left: 50px;
    padding: 20px;
    border-radius: 10px;
    ${mobile({margin: 'auto auto', height: 'auto', width: '70%'})}
`;

const Title = styled.h1`
    font-size: 30px;
    font-weight: 300;
    color: white;
    margin-bottom: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
    ${mobile({ width: '100%'})}
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    outline: none;
    border: none;
`;

const Agreement = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
`;

const B = styled.b`
    cursor: pointer;
`;

const Button = styled.button`
    width: fit-content;
    margin: 0 auto;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 300;
    cursor: pointer;
`;


const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
                By creating an account, I consent to the processing of my personal data in accordance with the <B>PRIVACY POLICY</B>
            </Agreement>
            <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
