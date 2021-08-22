import React from 'react'
import styled from 'styled-components'
import Search from '../img/search.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    padding: 20px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);

  @media only screen and (max-width: 480px){
        width: 50px;
    }
`;

const Image = styled.img`
    width: 20px;
`;

const Text = styled.span`
    text-align: center;
    margin-top: 10px
    @media only screen and (max-width: 480px){
        fonts-ze: 14px;
    }
`;

function MiniCard() {
    return (
        <Container>
            <Image src={Search} />
            <Text>Lorem ipsum dolor sit amet consectetur.</Text>
        </Container>
    )
}

export default MiniCard
