import React from 'react'
import styled from 'styled-components'
import phone from '../img/phone.png'
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    display: flex;

    @media only screen and (max-width: 480px){
        flex-direction: column;
        padding: 30px 10px;
    }
`;

const Left = styled.div`
    width: 50%;

    @media only screen and (max-width: 480px){
        display: none;
    }
`;

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;

    @media only screen and (max-width: 480px){
        width: 100%;
        padding: 0 10px;
    }
`;

const Image = styled.img`
`;

const Title = styled.span`
    font-size: 70px;
    margin-top: 30px;

    @media only screen and (max-width: 480px){
        font-size: 50px;
    }

`;
const SubTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color: #333;
    margin-top: 30px;
`;
const Desc = styled.p`
    font-size: 20px;
    color: #777;
    margin-top: 30px;
`;
const Button = styled.button`
    width: 150px;
    border: none;
    padding: 15px 20px;
    font-size: 20px;
    color: white;
    background-color: darkblue;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
`;

function Features() {
    return (
        <Container>
            <Left>
                <Image src={phone} />
            </Left>
            <Right>
                <Title>
                    <b>Good</b> design <br /><b>Good</b> business
                </Title>
                <SubTitle>We know that good design means good business</SubTitle>
                <Desc>We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
                    marketing goals, and look fantastic.</Desc>
                <Desc>
                    We care your business and guarantee you to achieve marketing goals.
                </Desc>
                <Button>Learn More</Button>
            </Right>
            <AnimatedShapes/>
        </Container>
    )
}

export default Features
