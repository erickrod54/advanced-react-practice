import React from "react";
import { Link } from "react-router-dom";

/**React-routerv6 Products app version 3 - 'NavBar' Component- 
 * Features:
 * 
 *              --> Building 'NavBar' Component to set
 *                  navigation links. 
 * 
 * Notes: this component will be use for 'SharedLayout' Component
 * 
 */

const NavBar = () => {

    return(
        <>
            <nav className='nav-links'>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/products'>Products</Link>
            </nav>
        </>
    )
}

export default NavBar;