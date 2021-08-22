import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height:50px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
width: 60%;
`;

const Right = styled.div`
width: 40%;
`;

const Logo = styled.h1`
font-weight:bold;
text-decoration: underline crimson;
`;

const Menu = styled.ul`
    list-style: none;

    @media only screen and (max-width: 480px){
        display: none;
    }
`;

const MenuItem = styled.li`
    font-size: 20px;
    font-weight: bold;
    color: gray;
    margin-right: 30px;
    display: inline-block;
    cursor: pointer;
`;

const Button = styled.button`
    border: 1px solid white;
    padding: 10px 15px;
    color: white;
    background-color: crimson;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
`;
function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>MjBadamosi</Logo>
                    <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Service</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Contact</MenuItem>
                    </Menu>
                </Left>
                <Button>Hire Me</Button>
                
            </Wrapper>
        </Container>
    )
}

export default Navbar
