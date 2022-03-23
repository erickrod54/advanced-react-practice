import React from 'react';
import { Link } from 'react-router-dom';

/**
 * React-router app version 2 - index js - Features:
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
