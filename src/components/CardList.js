import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const MyHeader = styled.header`
    z-index: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: stretch;
    flex-wrap: wrap;
    padding: 0 25px;
    justify-items: center;
`

const CardContainer = () => {
        return(
            <MyHeader>
                <Card></Card>
            </MyHeader>
        )
}

export default CardContainer;