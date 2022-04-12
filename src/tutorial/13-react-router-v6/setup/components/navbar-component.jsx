import React from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "./index.styles";

/**React-routerv6 Products app version 4 - 'NavBar' Component- 
 * Features:
 * 
 *              --> Implementing Navlinks Component. 
 * 
 * Notes: this component will be use for 'SharedLayout' Component
 * 
 */

const NavBar = () => {

    return(
        <>
            <nav >
                <NavLinks>
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/products'>Products</Link>
                </NavLinks>
            </nav>
        </>
    )
}

export default NavBar;