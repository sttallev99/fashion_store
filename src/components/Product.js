import React from 'react';
import { styled } from 'styled-components';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 380px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F4F4F6;
    position: relative;

    &:hover ${Info} {
        opacity: 1
    }

    ${mobile({margin: '15px 20px', minWidth: 'auto'})}
`;


const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Product = ({item}) => {
  return (
    <Container>
        {/* <Circle /> */}
        <Image src={item.img}/>
        <Info>
            <Icon>
                <AddShoppingCartOutlinedIcon style={{fontSize: '35px'}}/>
            </Icon>
            <Link to={`/product/${item._id}`}>
                <Icon>
                    <SearchOutlinedIcon style={{fontSize: '35px'}}/>
                </Icon>
            </Link>
            <Icon>
                <FavoriteBorderOutlinedIcon style={{fontSize: '35px'}}/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
