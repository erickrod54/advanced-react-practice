import React from "react";
import { NavLink } from "react-router-dom";
import { NavLinks } from "./index.styles";

/**React-routerv6 Products app version 5 - 'NavLinkComponent' - 
 * Features:
 * 
 *              --> Implementing 'Navlink' Component from 
 *                  'react-router-dom'.
 *  
 *              --> First way to apply 'isActive' - Implementing 
 *                  an 'Inline Style' to set an '{isActive}' 
 *                  class to '/home'.
 * 
 *              --> Second way to apply 'isActive' - Implementing
 *                  a className on '/about'.
 * 
 *              --> Third way to apply 'isActive' - Implementing
 *                  a Customize Component Class.
 * 
 * Notes: 'NavLink' Component 
 * 
 *      '{isActive}' is a prop from NavLink Component
 * 
 *------i use brackets because i'm destructuring from
 *------NavLink Object-Component---------------------
 * 
 * after the return i can style whatever prop from the 'NavLink'
 * that i want, this case the 'color', but can be the 'font',
 * 'font-size', 'font-weight' and so on.
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
                </NavLinks>
            </nav>
        </>
    )
}

export default NavLinkComponent;