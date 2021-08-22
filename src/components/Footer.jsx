import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 10%;
    background-color: #111;
    color: lightgray;

    @media only screen and (max-width: 480px){
        display:grid
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    @media only screen and (max-width: 480px){
        place-items: center;
   }
`;

const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

const ListItem = styled.li`
    display: inline-block;
    margin-right: 20px;
    @media only screen and (max-width: 480px){
        margin-right: 10px;
        font-size: 14px;
    }

`;

const Copyright = styled.span`
    @media only screen and (max-width: 480px){
        font-size: 14px;
    }
`;
function Footer() {
    return (
        <Container>
            <Wrapper>
                <List>
                    <ListItem>Guide</ListItem>
                    <ListItem>Support</ListItem>
                    <ListItem>API</ListItem>
                    <ListItem>Community</ListItem>
                </List>
                <Copyright>Badamosi &copy;</Copyright>
            </Wrapper>
        </Container>
    )
}

export default Footer
