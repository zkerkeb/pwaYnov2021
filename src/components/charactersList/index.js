import React, { useEffect, useState } from 'react'
import axios from 'axios'

import CharactersRow from '../charactersRow'

const CharactersList = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://hp-api.herokuapp.com/api/characters'
    })
      .then(res => {
        console.log(res)
        setCharacters(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <p>Harry Potter</p>
      {characters.map(character => (
        <CharactersRow
          key={character.name}
          name={character.name}
          image={character.image}
        ></CharactersRow>
      ))}
    </div>
  )
}

export default CharactersList
