import React from 'react';
// react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
/**
 * React-router app version 4 - index js - Features:
 * 
 *              --> Updating to react-router v6.2.2
 * 
 * Note: Changes:
 *          --> Switch doesn't exist.
 *          --> 'Router' Component wrap the 'app'- this case
 *               im do it to the Routes -.
 *          --> 'Routes' Component wrap every 'Route'.
 *          --> Every 'Route' has a 'element' props that can
 *              be use to pass js code or 'React Components'.
 *          --> The 'children placeholder' is replaced by the
 *              'element' prop, i only have to name the 
 *              'dynamic link'.
 *          --> React components for navigation experience as
 *              'Navbar' must be placed outside the Routes, but
 *               wrapped by 'Router' Component.
 */
const ReactRouterSetup = () => {
  return(
  <>
  <Router>
    {/**Here i place the 'Navbar' so will stick to all the
     * Routes
    */}
      <Navbar />
  <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/people' element={<People/>}></Route>
        {/**here i access to the specific person by id */}
        <Route path='/person/:id' element={<Person />}>
        </Route>
       <Route path='*' element={<Error/>}></Route>
  </Routes> 
  </Router> 
  </>
  )
};

export default ReactRouterSetup;
