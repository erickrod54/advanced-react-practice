import React from 'react';
import { Link } from 'react-router-dom';

/**
 * React-router app version 2 - Error js file - Features:
 * 
 *              --> Importing and using 'Link' Component 
 *                  to navigate back from Error Component
 *                  to 'Home' Component
 * 
 * Note: 'Link' is the Component recommended instead of 'a'
 * html tags
 */

const Error = () => {
  return (
    <div>
      <h1>Error Page</h1>
      <Link to='/' className='btn'>Back Home</Link>
    </div>
  );
};

export default Error;
