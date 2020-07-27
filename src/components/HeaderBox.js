import React from 'react';
import styled from 'styled-components';


const MyHeader = styled.header`
    display:flex;
    justify-content: center;
    margin:50px 0 30px 0;
    h1 {
        color: #F2F2F2;
        font-weight: 900;      
    }
`;

class HeaderBox extends React.Component {
    render() {
        return (
            <MyHeader>
                <h1>PokeWexx</h1>
            </MyHeader>
        )
    }
}
export default HeaderBox;