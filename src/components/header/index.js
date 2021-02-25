import React from 'react'
import logo from '../../logo.svg'
import PropTypes from 'prop-types'

const Header = props => {
  const { label, buttonFunc } = props
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>{label}</p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
      <button onClick={buttonFunc}>Coucou</button>
    </header>
  )
}

Header.propTypes = {
  label: PropTypes.string,
  buttonFunc: PropTypes.func.isRequired
}

export default Header
