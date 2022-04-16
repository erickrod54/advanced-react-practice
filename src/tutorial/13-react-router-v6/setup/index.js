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
import SingleProduct from "./pages/single-product-component";

/**React-routerv6 Products app version 6 - index js - Features:
 * 
 *              --> Importing and Placing 'SingleProduct'.
 *  
 *              --> Building a 'URL Params' in 'Products' Route
 *                  to take to every 'SingleProduct'.
 * 
 * Notes: 
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
                       
                       {/**Here i build 'URL Params' for every single
                        * product*/}
                       <Route 
                            path='/products/:productId' 
                            element={<SingleProduct />}/>
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