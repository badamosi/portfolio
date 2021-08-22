import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-right: 50px;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
      -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  border-radius: 10px;

  @media only screen and (max-width: 480px){
        margin-right: 0;
        margin-bottom: 20px;
        padding: 10px;
    }

`;

const PriceContainer = styled.div`
    display: flex;
    // flex-direction: column;
    align-items: center;
`;

const Price = styled.span`
 font-size: 50px;
 font-weight: bold;

 @media only screen and (max-width: 480px){
        font-size: 30px;
    }
`;

const Type = styled.button`
    padding: 10px;
    margin: 10px 0;
    border: 1.5px solid crimson;
    border-radius: 20px;
    color: crimson;

    @media only screen and (max-width: 480px){
        display: none;
    }
`;

const List = styled.ul`
    list-style: none;
`;

const ListItem = styled.li`
    margin: 30px 0;
    @media only screen and (max-width: 480px){
        margin: 10px;
        font-size: 12px;
    }
`;

const Button = styled.button`
    border: none;
    background-color: darkblue;
    color: white;
    font-size: 15px;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;

    @media only screen and (max-width: 480px){
        font-size: 12px;
        padding: 8px;
    }
`;

function PriceCard({price, type}) {
    return (
        <Container>
            <PriceContainer>
                $<Price>{price}</Price>/Month
                </PriceContainer>
                <Type>{type} Plan</Type>
                <List>
                    <ListItem>200 Hand-Crafted Templeates</ListItem>
                    <ListItem>Exclusive Support</ListItem>
                    <ListItem>50+ PreBuilt Websites</ListItem>
                    <ListItem>Premium Plugins</ListItem>
                </List>
                <Button>Join Now</Button>
        </Container>
    )
}

export default PriceCard
