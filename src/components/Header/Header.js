import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import FormIcon from '@material-ui/icons/Forum'

function Header() {
  return (
    <div className="header">
        <IconButton>
            <PersonIcon fontSize="large" className='header__icon' />
        </IconButton>
        <img className='header__logo' src="logo192.png" alt="header" />
        <IconButton>
            <FormIcon fontSize='large' className='header__icon' />
        </IconButton>
    </div>
  )
}

export default Header
