import React from 'react';
import './Pokemon.scss';
import PropTypes from 'prop-types';

const Pokemon = props => {
  return (
      <div className="pokemon_container">
        <img className="pokemon_element-photo" src={props.url} alt={props.name}/>
        <h2 className="pokemon_element-name">{props.name}</h2>
        
        <div className="pokemon_element-type">
            <ul className="pokemon_type-list">{props.types.map((type, index)=>
              <li className="pokemon_type-element" key={index}>
                {type}
              </li>)}    
            </ul> 
            {props.evolution && <div className="pokemon_evolution">{props.evolution}</div>}
            {/* cortocircuito: ponemos éste condicional para que éste div sólo se pinte si existe la evolución del pokemon, si existe props.evolution (si no pusiéramos éste cortocircuito, el div se pintaría siempre, incluso en los pokemon que no tienen evolucion (null) aunque no vieramos el div porque estaria vacío)  */}
        </div>
        
      </div>
    );
   };


// convertimos el componente pokemon en un componente funcional porque no va a recibir parámetros. Al hacer un compoenente funcional ya NO RECIBE THIS (al poner el componente Pokemon como una clase, llamabamos a los elementos con this.props.elemento), no hace falta usarlo. Mete las props en el parámetro que has utilizado en la función(props. si el parámetro fuera "paco" pondrías {paco.url} al introducirlo)

Pokemon.propTypes = {
  evolution: PropTypes.string,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Pokemon;