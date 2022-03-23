import React from 'react';
/**
 * React-router app version 1 - Home Component - Features:
 * 
 *              --> Setting up a Meesage for the 'Home'
 *                  Page 
 * 
 * Note: Set 'exact' keyword is very important if i dont want 
 * to display others 'Routes' that will match with 'Home' - '/' 
 * Route -the forward slash is the domain, this case localhost
 * but in a domain will be the root domain 'example.com'-
 */

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      {/**here i set the message */}
      <p>This is the Home Page</p>
    </div>
  );
};

export default Home;
