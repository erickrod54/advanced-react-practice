import React, { useState } from "react";
import { 
        BrowserRouter as Router, 
        Routes, 
        Route } from 'react-router-dom';
import Home from './pages/home-component';
import About from "./pages/about-component";
import Products from "./pages/products-component";
import Error from "./pages/error-component";

/**this are the shared layouts for the app and for the products*/
import SharedLayout from "./pages/shared-layout.component";
import SharedProductsLayout from "./pages/shared-layout-products-component";

import SingleProduct from "./pages/single-product-component";
import DashBoard from "./pages/dashboard-component";
import ProtectedRoute from "./pages/protected-route-component";
import Login from "./pages/login.component";

/**React-routerv6 Products app version 8 - index js - Features:
 * 
 *              --> Implementing 'ProtectedRoute' on 'Dashboard'.
 * 
 *              --> Implementing Nested Routes to place a 
 *                 'SharedProductsLayout' on 'Products' and 
 *                 'SingleProduct'.
 * 
 * Notes: 'ProtectedRoute' is a component that restrict access to
 * their children routes, in this case i'll apply it to
 * 'Dashboard'.
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

                       {/** '/products' belongs to '<SharedProductsLayout />' */}                    
                       <Route path='/products' element={<SharedProductsLayout />}>
                           {/**As this two are children they already 
                            * have '/products'*/}

                            {/** '<Products />' is set as 'index'*/}
                           <Route index element={<Products />}/>
                           {/**i took off '/products' cause is sharing layout*/}
                            <Route 
                                path=':productId' 
                                element={<SingleProduct />}/>
                       </Route>
                       


                        {/**'setUser' for 'Login'*/}
                        <Route 
                            path='/login' 
                            element={<Login setUser={setUser}/>}/>
                            
                        {/**'user' for 'Dashboard'*/}
                        {/**i wrap 'DashBoard' with 'ProtectedRoute'*/}                                                            
                        <Route 
                            path='/dashboard' 
                            element={
                            <ProtectedRoute user={user}>
                                <DashBoard user={user}/>
                            </ProtectedRoute>
                            }/>    
                       <Route path='*' element={<Error />}/>
                    </Route>
               </Routes>
               
            </Router>
        </>
    )
}

export default Index;