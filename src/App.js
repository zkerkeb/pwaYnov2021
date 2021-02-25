import React from 'react'
import styled from 'styled-components'

function App() {
  return (
    <div>
      <Square backgroundColor='blue'></Square>
      <Square backgroundColor='green'></Square>
      <Square backgroundColor='yellow'></Square>
      <Circle secondary></Circle>
      <Circle></Circle>
      <SquareBis border></SquareBis>
      <SquareBis></SquareBis>
    </div>
  )
}

const SquareBis = styled.div`
  width: 30px;
  height: 30px;
  border: ${props => (props.border ? props.theme.border : 'transparent')};
`

const Square = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => props.backgroundColor};
`

const backgroundColorSecondary = ({ secondary }) => {
  if (secondary) return ''
  else return 'red'
}

const borderSecondary = ({ secondary }) => {
  if (secondary) return 'red'
  else return 'transparent'
}

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${props => backgroundColorSecondary(props)};
  border: 1px solid ${props => borderSecondary(props)};
`

export default App
