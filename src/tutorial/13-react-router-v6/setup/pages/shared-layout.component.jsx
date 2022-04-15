import React from "react";
import { Outlet } from "react-router-dom";
//import NavBar from "../components/navbar-component";

import NavLinkComponent from "../components/navlink-component";
import { Container } from "../components/index.styles";

/**React-routerv6 Products app version 5 - 'SharedLayout' 
 * Component - Features:
 * 
 *          -->Importing and Placing 'NavLinkComponent'.
 * 
 * Notes: 'SharedLayout' will carry with a 'NavBar' -this two 
 * first will stick on the navigation- and an 'Outlet' -will
 * display the current child-.
 * 
 * For this version 5, i unmmount 'NavBar' Component to set 
 * 'NavLinkComponent' which have a 'NavLink' Component native 
 * from 'react-router-dom' this way i'll be able to use special 
 * features related with active classes
 */

const SharedLayout = () => {

    return(
        <>
        <NavLinkComponent />            
        <Container>
            <Outlet />
        </Container>
        
        </>
    )
}

export default SharedLayout;