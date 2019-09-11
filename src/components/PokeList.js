import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {

    return(
      
      <ul className="pokemon_list">{this.props.pokemons.map(pokemon=>
        <li className="pokemon_elements" key={pokemon.id}>
          <Pokemon
            name={pokemon.name}
            url={pokemon.url}
            types={pokemon.types}
            />
        </li>
        )}
      </ul>


    );
  }
}

export default PokeList;