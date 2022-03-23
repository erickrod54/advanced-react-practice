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
 * React-router app version 2 - index js - Features:
 * 
 *              --> Placing 'NavBar' Component.
 * 
 * Note: Depending where i place the 'NavBar' will stick to
 * the routes and the navigation experience.
 */
const ReactRouterSetup = () => {
  return(
  <>
  <Router>
    {/**Here i place the 'Navbar' so will stick to all the
     * Routes
     */}
    <Navbar />
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
