import React from 'react'
import styled from 'styled-components'
import AnimatedShapes from './AnimatedShapes';
import me from '../img/majeed.png'

const Container = styled.div`
    height: calc(100vh - 50px);
    display:flex;
    padding: 20px;

    @media only screen and (max-width: 480px){
        flex-direction: column;
    }
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px){
        width: 100%;
        height: 100%;
    }
`;

const Title = styled.h1`
    font-size: 60px;
    width: 60%;

    @media only screen and (max-width: 480px){
        width: 100%;
        font-size: 50px;
    }
`;

const Description = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
    color: #777;

    @media only screen and (max-width: 480px){
       width: 100%;
    }
`;


const Info = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-top: 50px;

    @media only screen and (max-width: 480px){
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`;

const Button = styled.button`
    background-color: darkblue;
    color: white;
    padding: 15px;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;

    @media only screen and (max-width: 480px){
       margin-bottom: 20px;
    }
`;

const Contact = styled.div`
    display:flex;
    flex-direction: column;
    @media only screen and (max-width: 480px){
        text-align:center;
    }
`;

const Phone = styled.span`
    color: #f0667d;
    font-weight: bold;
    margin-bottom: 5px;
`;

const ContactText = styled.span`
    color: gray;
`;

const Right = styled.div`
    width: 40%;
`;

const Image = styled.img`
    width: 100%;

    @media only screen and (max-width: 480px){
        display: none;
    }
`;


function Intro() {
    return (
        <Container>
            <Left>
                <Title>Adventures in creative age</Title>
                <Description>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </Description>
                <Info>
                    <Button>START A PROJECT</Button>
                    <Contact>
                        <Phone>(+234) 814 0506 015</Phone>
                        <ContactText>for any question or concern</ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right>
                <Image src={me} />
            </Right>
            <AnimatedShapes/>
        </Container>
    )
}

export default Intro
