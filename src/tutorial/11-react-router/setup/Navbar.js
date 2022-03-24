import React from 'react';
import { Link } from 'react-router-dom';

/**
 * fixing heading:
 * 
 * ----wrong title for:-------------------------------
 * ---version e7bd87906d9f0b03ec701171d3a0765964b0d0c3
 * 
 * React-router app version 3 - Navbar js - Features:
 * 
 *              --> Importing and using 'Link' Component 
 *                  to create a use-experience navigation.
 * 
 * Note: 'Link' is the Component recommended instead of 'a'
 * html tags
 */
const Navbar = () => {
  return (
  <>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link> 
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/people'>People</Link>
        </li>
      </ul>
    </nav>
  
  </>
  
  );
};

export default Navbar;
