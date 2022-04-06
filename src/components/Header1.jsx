import React from 'react';
import '../assets/styles/components/Header1.css';

const Header1 = () => {

  return (

    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <div className='container'>
        <a className='navbar-brand' href='#'>CarlosPianoForte</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbar' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbar'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#main'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#speakers'>Artist</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#place-time'>About</a>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle header-text' href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                  Dropdown
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li><a className='dropdown-item' href='#main'>About me</a></li>
                <li><a className='dropdown-item' href='#speaker'>Portfolio</a></li>
                <li><a className='dropdown-item' href='#place-time'>Experience</a></li>
                <li><hr className='dropdown-divider' /></li>
                <li><a className='dropdown-item' href='#'>Contact</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header1;
