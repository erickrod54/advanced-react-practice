import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
/**
 * React-router app version 1 - index js - Features:
 * 
 *              --> Using 'Router' to wrap the app.
 *              --> Setting 'Routes' to render every Component.
 *              --> Set 'exact' keyword for 'Home' Component path.
 *              --> Setting up 'Error' Component and 'Switch'
 * 
 * Note: Set 'exact' keyword is very important if i dont want 
 * to display others 'Routes' that will match with 'Home' - '/' 
 * Route -the forward slash is the domain, this case localhost
 * but in a domain will be the root domain 'example.com'-
 * 
 * To start and set 'react-router' is always a good practice to 
 * make it in a root component so the 'Routes' will have access 
 * to all the Components
 */
const ReactRouterSetup = () => {
  return(
  <>
  <Router>
    {/**As '*' matches with all the 'Routes', 'Switch' will
     * show me 'Error' Component without the match 'Routes'*/}
    <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/about'><About/></Route>
        <Route path='/people'><People/></Route>
        <Route path='/person'><Person/></Route>

        {/**the star '*' means all routes that match
         * if i try to acces to a route that does not exist 
         * for '/adson' will throw the Error Component
        */}

       <Route path='*'><Error/></Route>
    </Switch>
  </Router>  
  </>
  )
};

export default ReactRouterSetup;
