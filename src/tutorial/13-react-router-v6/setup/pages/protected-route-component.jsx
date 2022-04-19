import React from "react";
import { Navigate } from "react-router-dom";

/**React-routerv6 Products app version 8 - index js - Features:
 * 
 *              -->Implementing Validation on 'user' existence
 *                 to give access to the children 'DashBoard'
 *                 Component.
 * 
 * Notes: 'ProtectedRoute' is a Component that restrict access to
 * their children routes, in this case i'll apply it to
 * 'Dashboard'.
 * 
 * The great fact of this implemmentation is that i can customize
 * this Component as i need.
 */

/**Here i acces children that is 'DashBoard' Component, 
 * and 'user' to validate that exist
*/
const ProtectedRoute = ({ children, user }) => {
    if (!user) {
        return <Navigate to='/home'/>
    }
    return children;
}

export default ProtectedRoute;