import React from 'react';
import './SideText.css';
import TypeWriter from 'react-typewriter';

const SideText = ({ filmText }) => {
	const concatData = (filmText) => {
		return (filmText.text + ' ' + filmText.title + ' ' + filmText.episode)
	}

  return (
    <div className='side-text-div'>
      <TypeWriter typing={1} className='typewriter-text' >
      	{ concatData(filmText) }
      </TypeWriter>
    </div>
  )
}

export default SideText