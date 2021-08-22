import React from 'react'
import styled from 'styled-components'
import PriceCard from './PriceCard';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media only screen and (max-width: 480px){
        flex-direction: column;
    }
`;

function Price() {
    return (
        <Container>
            <PriceCard price="20" type="Basic"/>
            <PriceCard price="75" type="Premium"/>
            <PriceCard price="100" type="Advanced"/>
        </Container>
    )
}

export default Price
