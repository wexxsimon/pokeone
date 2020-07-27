import React from 'react'
import styled from 'styled-components';
import Progress from './Progress';

const CardBox = styled.section`  
   background-size: 350px 350px;
   padding-bottom: 23px;
    span {
        font-size: 1.8rem;
        font-weight:bold;
        color: #4358b126;
        margin-left:20px;
    }
`;
const CardAbilities = styled.div`
    width: 177px;
    background: #F29422;
    padding: 10px 0px 0px 10px;
    border-radius: 103px;
    margin: 0 auto;
    margin-top: 10px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
   h3 {
    text-transform: capitalize;
   }
    h4 {
        font-size:0.75rem;
        font-weight:bold;    
        text-transform: uppercase;
        color: #fff7d2;
    }  
    article {
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0 0px 0;
        padding: 0px 0 10px 0;
        h5 {         
            color: #884a00;
    font-size: 0.5rem;
    font-weight: 900;
    text-transform: uppercase;
        }
    }    
`;
const CardBody = styled.div`
    margin: 20px 0 10px 0;
    padding: 0 20px 0 20px;
    h5 {
        font-size: 0.5rem;        
        text-transform: uppercase;    
        color: #717ca9;
        border-bottom: 1px solid #d9e3f1;     
        margin: 0 0;
        padding-top:5px;
        padding-bottom:5px;
        display: flex;
        justify-content: space-between;

    }
    span {
        font-weight: 700;
        font-size: 0.6rem;
        color: #4358b1;
    }
`;
const CardImage = styled.div`   
    background: #c5d1e2;
    display:flex;
    align-items: center;
    justify-content:center;
    position:relative;
    margin: 0 auto;
    border-radius:120px;
    flex-direction: column;
    padding:25px;
    width: 150px;
    height: 150px;
    margin-top: -10px;   
    img {
        width: 100%;       
    }
    h4 {
        font-weight: 900;
        color: #2f4e79;
        font-size: 0.65rem;
        text-transform: uppercase;
        z-index:6;
    }
`;

const Sprites = styled.div` 
  display: flex;
  justify-content:space-between;
    div {
        background: #294ef285;
        border-radius: 150px;
        margin-top: -81px;
        margin-left: 36px;
        height: 75px;
        width: 75px;
        z-index: 2;
    }
    img {
        max-width: 70px
        margin: 0 auto;
    }
`;


const PokeCard = ({pokemon}) => {

    return (
      <CardBox key={pokemon.id} className="card">
            <span className="card-subtitle mb-2 text-muted">{pokemon.id}</span>  
            <CardImage>
                <h4>{pokemon.name}</h4>  
                 <img src={pokemon.sprites['front_default']} />               
            </CardImage>
            <Sprites>
                <div>
                    <img src={pokemon.sprites['front_shiny']} />
                </div>
            </Sprites>
            <Progress experience={pokemon.base_experience}/>                
            <CardAbilities className="card_title">
                <article>
                    <h5>habilidade 1</h5>
                    <h5>habilidade 2</h5>
                </article>                    
            </CardAbilities>
            <CardBody> 
                <h5 className="card-subtitle mb-2 text-muted">Altura ( metros )<span>{pokemon.height}</span></h5>  
                <h5 className="card-subtitle mb-2 text-muted">Comprimento ( metros )<span>{pokemon.weight}</span></h5> 
                <h5 className="card-subtitle mb-2 text-muted">Peso ( kilos )<span>{pokemon.weight * pokemon.height / 10}</span></h5>                    
            </CardBody>
      </CardBox>
    )
};

export default PokeCard