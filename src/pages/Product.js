import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Container = styled.div`
    background-color: #F4F4F6
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: '10px', flexDirection: 'column'})}
`;

const ImageContainer = styled.div`
    flex: 0.5;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
    // width: 100%;
    height: 70vh;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({padding: '10px'})}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Description = styled.p`
    margin: 20px 0;
    width: 80%;
`; 

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 30%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    ${mobile({width: '100%'})}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 25px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
    display: flex;
    width: 30%;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: '100%'})}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500;
    cursor: pointer;

    &hover{
        background-color: #f8f4f4
    }
`;



const Product = () => {
    const location = useLocation();
    const productId = location.pathname.split('/')[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1); 
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async() => {
            try{
                const response = await axios.get(`http://localhost:5000/api/products/find/${productId}`);
                setProduct(response.data);
            }catch(err){

            }
        }
        getProduct();
    }, [productId]);

    const modifyQuantity = (type) => {
        if(type === 'inc') {
            setQuantity(quantity + 1);
        } else if(type === 'dec') {
            quantity > 1 && setQuantity(quantity - 1)
        }
    }

    const handleClick = () => {
        //UPDATE CART
        dispatch(addProduct({ ...product, quantity, color, size }))
    }

    return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <ImageContainer>
                <Image src={product.img}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{product.Title}</Title>
                <Description>{product.description}</Description>
                <Price>${product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color?.map(c => <FilterColor color={c} key={c} onClick={() => setColor(c)}/>)}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize style={{cursor: 'pointer'}} onChange={(e) => setSize(e.target.value)}>
                            {product.size?.map(s => <FilterSizeOption>{s}</FilterSizeOption>)}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveIcon style={{cursor: 'pointer'}} onClick={() => modifyQuantity('dec')}/>
                        <Amount>{quantity}</Amount>
                        <AddIcon style={{cursor: 'pointer'}} onClick={() => modifyQuantity('inc')}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Product
