import React from 'react';
import { styled } from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';

import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Container = styled.div`
    height: 60px;
    ${mobile({height: '50px'})}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({padding: '10px 0'})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none'})}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: '50px'})}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.span`
    font-weight: bold;
    font-size: 30px;
    cursor: pointer;
    color: black;
    ${mobile({ fontSize: '16px', fontWeight: 900})}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${mobile({ justifyContent: 'center', flex: 2, paddingRight: '5px'})}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: '12ppx', marginLeft: '10px'})}
`;

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input />
                <SearchIcon style={{color: 'gray', fontSize: '16px;'}}/>
            </SearchContainer>
        </Left>
        <Center>
            <Link to='/' style={{textDecoration: 'none'}}>
                <Logo>Fashion store</Logo>
            </Link>
        </Center>
        <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlinedIcon/>
                </Badge>
            </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
