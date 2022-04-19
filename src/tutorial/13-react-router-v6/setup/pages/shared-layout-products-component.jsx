import React from "react";
import { Outlet } from "react-router-dom";

/**React-routerv6 Products app version 8 - 'SharedProductsLayout' 
 * Component - Features:
 * 
 *              --> Building 'SharedProductsLayout' Component. 
 * 
 *              --> Importing and Placing 'Outlet' Component to
 *                  render the componenents that will share this
 *                  layout.
 * 
 * Notes: This sharedLayout will concern to everything related 
 * with 'Products'
 */

const SharedProductsLayout = () => {

    return(
        <>
        <Outlet />
        </>
    )
}

export default SharedProductsLayout;