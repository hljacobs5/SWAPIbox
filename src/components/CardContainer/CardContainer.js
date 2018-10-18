import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({ people, planets, vehicles, display, selected, favorites, addToFavorites, favorited, isLoading }) => {
	const cards = Object.keys(display).map(element => { 
    console.log(`${selected}`)
		return <Card
			data={display[element]}
			key={element}
      id={display[element].name}
      selected={selected}
      addToFavorites={addToFavorites}
      favorited={false}
		/>
	})

  if (!selected.length && !Object.keys(display).length) {
    return (
      <div>
        Welcome To SWAPI BOX
      </div>
  )} else if (isLoading) {
      return (
        <div>loading, please wait..</div>
    )
  }	else {
  	return (
  	  <div className='card-container'>
  	  	{ cards }
  	  </div>
  	)
  }
}

CardContainer.propTypes = {
	display: PropTypes.object.isRequired,
  selected: PropTypes.string.isRequired
}; 

export default CardContainer;