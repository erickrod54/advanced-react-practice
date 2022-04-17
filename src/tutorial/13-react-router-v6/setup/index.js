import React, { useState } from "react";
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
import DashBoard from "./pages/dashboard-component";
import Login from "./pages/login.component";

/**React-routerv6 Products app version 7 - index js - Features:
 * 
 *              --> Building States for Authentication 'user', 'setUser'.
 *              
 *              --> Building 'Login' Route passing a 'setUser' prop.
 * 
 *              --> Building 'Dashboard' Route passing a 'user' prop. 
 * 
 * Notes: 'setUser' will be passed as props to 'Login' to build 
 * authentication process and 'user' will be passed as props to 'DashBoard'
 * to build the after authentication process.
 */

const Index = () => {

    const [ user, setUser] = useState(null);

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

                        {/**'setUser' for 'Login'*/}
                        <Route 
                            path='/login' 
                            element={<Login setUser={setUser}/>}/>
                        {/**'user' for 'Dashboard'*/}                                                            
                        <Route 
                            path='/dashboard' 
                            element={<DashBoard user={user}/>}/>    
                       <Route path='*' element={<Error />}/>
                    </Route>
               </Routes>
               
            </Router>
        </>
    )
}

export default Index;