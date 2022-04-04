import React from "react";
import { 
        BrowserRouter as Router, 
        Routes, 
        Route } from 'react-router-dom';
import Home from "./pages/home-component";
import About from "./pages/about-component";
import Products from "./pages/products-component";
import Error from "./pages/error-component";

/**React-routerv6 Products app version 1 - index js - Features:
 * 
 *              -->Importing BrowserRouter, Routes, Route 
 *                 Components and Structuring Routing.         
 * 
 *              -->Importing and placing Home, About, Products
 *                 Error Components as every 'Route'
 * 
 *              -->Importing and placing Error Component to 
 *                 show an error message.
 * 
 * Notes: Route 'element' prop can render javascript directly or
 * 'JSX' components like this way:
 *          
 *           <Route path='testing' element={<div> <h1>testing</h1>
 *                   </div>}/>
 * 
 * always is adviceable after test routes, take as 'element' the
 * Components already made, whatever i have in the content of the
 * Components will be render when the 'Route' is access
 */

const Index = () => {

    return(
        <>
            <h2>React Router V6 practice</h2>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/products' element={<Products />}/>
                    <Route path='*' element={<Error />}/>
                </Routes>
            </Router>
        </>
    )
}

export default Index;