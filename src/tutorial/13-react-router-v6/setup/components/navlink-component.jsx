import React from "react";
import { NavLink } from "react-router-dom";
import { NavLinks } from "./index.styles";

/**React-routerv6 Products app version 7 - 'NavLinkComponent' - 
 * Features:
 * 
 *              --> Building '/login' 'NavLink' to set navigation
 *                  to 'Login' Component.
 * 
 * Notes: this navigation will be displayed with the rest of 'NavLinks'.
 */

const NavLinkComponent = () => {

    return(
        <>
            <nav >
                <NavLinks>
                    {/**First way to apply {isActive}*/}
                    <NavLink 
                        to='/home' 
                        style={({isActive}) => {
                        return { color: isActive ? 
                            '#A10000'
                             : 
                             '#F4BB44'}
                    }}>Home</NavLink>

                    <NavLink 
                        to='/about' 
                        className={({isActive}) =>
                         isActive ? 'link active' 
                         : 
                         'link'
                         }>About</NavLink>

                    <NavLink to='/products' >Products</NavLink>

                    <NavLink 
                        to='/login' 
                        style={({isActive}) => {
                        return { color: isActive ? 
                            '#A10000'
                             : 
                             '#F4BB44'}
                    }}>Login</NavLink>     
                    
                </NavLinks>
            </nav>
        </>
    )
}

export default NavLinkComponent;