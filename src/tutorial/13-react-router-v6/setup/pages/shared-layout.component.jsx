import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar-component";

/**React-routerv6 Products app version 3 - 'SharedLayout' 
 * Component - Features:
 * 
 *          -->Building 'SharedLayout' Component.
 * 
 * Notes: 'SharedLayout' will carry with a 'NavBar' -this two 
 * first will stick on the navigation- and an 'Outlet' -will
 * display the current child-.
 */

const SharedLayout = () => {

    return(
        <>
        <NavBar />
        <section className="section">
            <Outlet />
        </section>
        </>
    )
}

export default SharedLayout;