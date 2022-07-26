import React from 'react';

import TinderIcon from '../../Assets/tinder_logo.png';
import './NavBar.scss';

export default function index() {
  return (
    <div className="navbar">
        <img src={TinderIcon} alt="Logo" className='navbar-logo' />
        <h2 className="navbar-title">Movies Tinder</h2>
    </div>
  )
}
