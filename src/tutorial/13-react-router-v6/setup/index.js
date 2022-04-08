import React from "react";
import { 
        BrowserRouter as Router, 
        Routes, 
        Route } from 'react-router-dom';
import Home from "./pages/home-component";
import About from "./pages/about-component";
import Products from "./pages/products-component";
import Error from "./pages/error-component";

/**React-routerv6 Products app version 2 - index js - Features:
 * 
 *              --> Implementing Nested Routes applying it on
 *                 'Home' Component.
 *              
 *              -->Implementing a Second Parent 'Route' called
 *                 'DashBoard'
 * 
 * Notes: A 'Route' component that wrap another 'Route' or group 
 * of it makes it a father and the 'Route' or the group will be
 * their children
 * 
 * ----this case-- 'Home' Route will become in father of the 
 * ----rest of the Routes
 * 
 * this is extremily usefull to create a shared layout and to 
 * created nested navigations (most appreciated in Dashboards
 * or protected Routes as well as navBars Components ) 
 */

const Index = () => {

    return(
        <>
            <h2>React Router V6 practice</h2>
            <Router>
                {/**here i'll set a navBar Component, now is as
                 * a test for 'Shared Layout' outside the 'Routes'
                */}
                <nav>our navbar</nav>
                <Routes>
                    
                    {/** 'Home' Component will wrap and become
                     * parent of the rest of the routes 
                     * -'Shared Layout' internal to Routes-*/}

                    <Route path='/' element={<Home />}>
                       <Route path='/about' element={<About />}/>
                       <Route path='/products' element={<Products />}/>
                       <Route path='*' element={<Error />}/>
                    </Route>
                    {/**Can cohexist multiple parent Routes
                     * as is the case of '/dashboard'
                     */}
                    <Route 
                       path='/dashboard' 
                       element={<div>dashboard</div>}>
                        <Route 
                            path='/dashboard/stats' 
                            element={<div>stats</div>}></Route>
                     </Route>
               </Routes>
               {/**'Shared Layout' external to Routes 
                * example for footer */}
               <footer>our footer</footer>
            </Router>
        </>
    )
}

export default Index;