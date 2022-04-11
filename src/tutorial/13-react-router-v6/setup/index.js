import React from "react";
import { 
        BrowserRouter as Router, 
        Routes, 
        Route } from 'react-router-dom';
import Home from './pages/home-component';
import About from "./pages/about-component";
import Products from "./pages/products-component";
import Error from "./pages/error-component";
import SharedLayout from "./pages/shared-layout.component";

/**React-routerv6 Products app version 3 - index js - Features:
 * 
 *              --> Implementing 'SharedLayout' Component. 
 *              --> Setting 'Home' Component Route as a child,
 *                  and as a 'index'.
 * 
 * Notes: 'SharedLayout' will carry with a 'NavBar' -this two 
 * first will stick on the navigation- and an 'Outlet' -will
 * display the current child-.
 * 
 * 'index' prop in a route displays that route as default.
 * 
 * --Pending work on dashboard, and footer
 */

const Index = () => {

    return(
        <>
            <h2>React Router V6 practice</h2>
            <Router>
                <Routes>

                    <Route path='/' element={<SharedLayout />}>
                       <Route index path='/home' element={<Home />}/>
                       <Route path='/about' element={<About />}/>
                       <Route path='/products' element={<Products />}/>
                       <Route path='*' element={<Error />}/>
                    </Route>
                  
                    <Route 
                       path='/dashboard' 
                       element={<div>dashboard</div>}>
                        <Route 
                            path='/dashboard/stats' 
                            element={<div>stats</div>}></Route>
                    </Route>
               </Routes>
               
            </Router>
        </>
    )
}

export default Index;