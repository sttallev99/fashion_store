import React from 'react';
import { styled } from 'styled-components';

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
    height: 35%;
    width: 40%;
    margin: auto 0;
    margin-left: 50px;
    padding: 20px;
    border-radius: 10px;
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
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    outline: none;
`;

const Button = styled.button`
    width: fit-content;
    margin: 0 auto;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 300;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Link = styled.a`
    margin: 0 auto;
    margin-top: 5px;
    color: white;
    font-weight: 300;
    cursor: pointer;
    text-decoration: underline;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
            <Link>Do not remember the password?</Link>
            <Link>Create New Account</Link>
        </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
