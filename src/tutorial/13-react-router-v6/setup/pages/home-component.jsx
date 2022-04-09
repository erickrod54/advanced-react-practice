import React from "react";
import { Outlet } from "react-router-dom";

//import { Btn } from "../components/index.styles";

/**React-routerv6 Products app version 2 - 'Home' Component - 
 * Features:
 * 
 *              -->Setting up the Parent Route (Shared Layout)
 *                 using 'Outlet' Component
 * 
 * Notes: Wrapping the 'Route' or 'Route' group is the first step,
 * then to finish set up the 'Shared Layout' i set the 'Outlet' 
 * Component on the Parent Route -for this case 'Home' -
 */

const Home = () => {

    return(
        <>
        <section className="section">
            <h2>Home Component</h2>
            
              <h2>Home - Shared layout</h2>
            <Outlet />
        </section>
        </>
    )
}

export default Home;