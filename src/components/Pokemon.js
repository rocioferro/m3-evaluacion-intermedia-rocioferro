import React from 'react';


class Pokemon extends React.Component {
  render() {
    return (
      <div className="pokemon_container">
        <h2 className="pokemon_element-name">{this.props.name}</h2>
        <img className="pokemon_element-photo" src={this.props.url} alt="pokemon"/>
        <div className="pokemon_element-type">
            <ul className="pokemon_type-list">{this.props.types.map((type, index)=>
              <li className="pokemon_type-element" key={index}>{type}
              </li>)} 
            </ul> 
        </div>
      </div>
    );
  }

}

export default Pokemon;