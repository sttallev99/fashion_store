import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Add } from '@mui/icons-material';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: '10px'})}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transperant'};
    color: ${props => props.type === 'filled' && 'white'}
`;


const TopTexts = styled.div`
    ${mobile({ display: 'none'})}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: 'column'})}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    ${mobile({flexDirection: 'column', alignItems: 'center'})}
`;

const ProductDetails = styled.div`
    display: flex;
    flex: 2;
`;

const Image = styled.img`
    // width: 250px;
    height: 30vh;
    ${mobile({width: '200px', height: '200px', objectFit: 'cover'})}
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`

`;

const ProductID = styled.span`

`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => props.color};
    border-radius: 50%;
`;

const ProductSize = styled.span`
`;

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === 'total' && '500'};
    font-size: ${props => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span`
`;

const SummaryItemPrice = styled.span`

`;

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`


const Cart = () => {
    const cart = useSelector(state => state.cart);

    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async() => {
            try{
                const res = await axios.post('http://localhost:5000/api/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100
                });
                navigate('/success', {state: res.data})
            }catch(err){}
        }
        makeRequest();
    },[stripeToken, cart.total, navigate]);

  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    {cart.products.map(p => 
                        <Product>
                            <ProductDetails>
                                <Image src={p.img}/>
                                <Details>
                                    <ProductName><b>Product:</b> {p.title}</ProductName>
                                    <ProductID><b>ID:</b> {p._id}</ProductID>
                                    <ProductColor color='black'/>
                                    <ProductSize><b>Size:</b> {p.size}</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>{p.quantity}</ProductAmount>
                                    <RemoveIcon />
                                </ProductAmountContainer>
                                <ProductPrice>${p.price*p.quantity}</ProductPrice>
                            </PriceDetails>
                        </Product>
                    )}
                    {/* <Hr /> 
                    <Product>
                        <ProductDetails>
                            <Image src='https://cdn.aboutstatic.com/file/images/fc9a259599ce61dae3b92469f1e34db0.jpg?brightness=0.96&quality=75&trim=1&height=1067&width=800'/>
                            <Details>
                                <ProductName><b>Product:</b> ADIDAS BY STELLA MCCARTNEY</ProductName>
                                <ProductID><b>ID:</b> 19956363</ProductID>
                                <ProductColor color='black'/>
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <RemoveIcon />
                            </ProductAmountContainer>
                            <ProductPrice>$30</ProductPrice>
                        </PriceDetails>
                    </Product> */}
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                        name='Fashion Store'
                        billingAddress
                        shippingAddress
                        description={`Your total is $${cart.total}`}
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <SummaryButton>CHECKOUT NOW</SummaryButton>
                    </StripeCheckout>
                </Summary>    
            </Bottom>   
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart
