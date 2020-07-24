import React from  'react';
import styled from 'styled-components';

const CardBox = styled.section`
    background: #f2f2f2;
    background: #fff;
    border: 1px solid#fcfdff;
    margin: 30px 15px;
    width: 280px;
    height: auto;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.4s;
    padding:20px 10px;
    transform: scale(1, 1);  
    box-shadow: inset 0px 0px 31px -1px rgba(0,227,225,1);
    border: 1px solid #00ffff;
`
const Card = () => {
    return(
        <CardBox className="card">
            <h2>Card Box</h2>
        </CardBox>
    )
}

export default Card;