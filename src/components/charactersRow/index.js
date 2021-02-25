import React from 'react'
import PropTypes from 'prop-types'

const CharactersRow = ({ name, image }) => {
  return (
    <div>
      <p>{name}</p>
      <img width='200px' src={image}></img>
    </div>
  )
}

CharactersRow.propTypes = {
  name: PropTypes.string,
  image: PropTypes.any
}

export default CharactersRow
