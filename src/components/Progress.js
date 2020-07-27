import React from 'react';
import { Line } from 'rc-progress';
import styled from 'styled-components';

const BoxProgress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px 45px 15px 45px;
  margin: 0 auto;
  margin-top: 26px;
  width: 210px;
    h4 {
      font-weight: bold;
      color: #17BF95;
      margin: 0px 3px;
      span{
        color: #17BF95;
        margin: 0;
        font-size: 0.7rem;
      }
    }
`

const Progress = ({experience}) => {
 console.log(experience);
    return (
      <BoxProgress>
        <Line percent={experience / 5 } strokeWidth="2" strokeColor="#17BF95" ></Line>
        <h4>{experience} <span>XP</span></h4>
      </BoxProgress>
    );
}

export default Progress;