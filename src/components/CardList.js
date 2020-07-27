import React, { Component } from 'react';
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

class CardContainer extends Component {

    constructor(){
        super();
        this.state = {
            pokemons : [],
            offset: 0,
            loadNumber: 12
        }
        this.handleMoreClick = this.handleMoreClick.bind(this);  
    }

    getNextOffset() {
        return this.state.offset+this.state.loadNumber;   
      }
    
      handleMoreClick(event) {
        const newOffset = this.getNextOffset();
        this.setState({offset: newOffset}, () => {
          //console.log("Offset: " + this.state.offset)
          this.getMorePokemon();
        });    
      }
    
      componentDidMount() {
        this.getMorePokemon();  
      }
    

    getMorePokemon() {
        let url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.offset + "&limit=" + this.state.loadNumber;
        fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data) {
            this.setState({pokemons : data.results}, () => {
              this.state.pokemons.map(pokemon => {
                fetch(pokemon.url)
                .then(response => response.json())
                .then(data => {
                  if (data) {
                    var temp = this.state.pokemonDetails
                    temp.push(data)
                    this.setState({pokemonDetails: temp});
                  }            
                })
                .catch(console.log)
              });
            });       
          }
        })
        .catch(console.log)
      }
    render(){
        const { pokemonDetails }  = this.state;
        const renderedPokemonList = pokemonDetails.map((pokemon, index) => {
            return(
                    <Card pokemon={pokemon}></Card>
            );
        });

        return (
            <div className="container">
              <div className="cards-list">
                {renderedPokemonList}
              </div>
              <button type="button" className="btn btn-secondary btn-block" key="more-button" id="more-button" onClick={this.handleMoreClick}>Load More</button>
            </div>
          );
    }
}

export default CardContainer;