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
 * React-router app version 3 - index js - Features:
 * 
 *              --> Building the Route for 'Person' 
 *                  Component.
 *              --> Setting 'children' Placeholder as 
 *                  '<Person />'.
 * 
 * Note: in the 'person' route the name after the ':' can 
 * be any name that i want, and the path also i can do it
 * as long or as short as i want -this characteristics named
 * as a dynamic links-, example:
 *      
 *        '/person/:id' or '/:id' -this is a dynamic link-
 * 
 * both access the same information its only a name that i give
 * to the path
 * 
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
        {/**here i access to the specific person by id */}
        <Route path='/person/:id' children={<Person />}></Route>
       <Route path='*'><Error/></Route>
    </Switch>
  </Router>  
  </>
  )
};

export default ReactRouterSetup;
