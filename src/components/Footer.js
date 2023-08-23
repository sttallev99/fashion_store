import React from 'react';
import { styled } from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


import { mobile } from '../responsive';


const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column'})}
`;

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Description = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: 'none'})}
`;

const Title = styled.h3`
  margin-bottom: 20px;

`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  ${mobile({ padding: '20px', backgroundColor: '#fff8f8'})}
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Payment = styled.img`
  width: 60%;
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
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <FacebookIcon/>
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><MapIcon style={{marginRight: '5px'}}/>Bulgaria, TownName, StreetName 999</ContactItem>
        <ContactItem><PhoneIcon style={{marginRight: '5px'}}/>+359/888/999/999</ContactItem>
        <ContactItem><EmailIcon style={{marginRight: '5px'}}/>contact@fashion-store.dev</ContactItem>
        <Payment src='https://t3.ftcdn.net/jpg/05/38/53/76/360_F_538537674_qpvDKu7W7XlMgCdJsmd7Bk9NpWIacy4X.jpg'/>
      </Right>
    </Container>
  )
}

export default Footer
