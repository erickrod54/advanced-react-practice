import React from "react";

/**React-routerv6 Products app version 7 - 'DashBoard' Component- 
 * Features:
 * 
 *              --> Building a 'Dashboard' Component.
 *  
 *              --> Setting up a welcome message using 'user' data.
 * 
 * Notes: 'user' is be passed as props to 'DashBoard', the '?.'
 * to access to the 'name' is related with 'async' targeting the
 * value. reference: Login Component
 */

/**here i bring 'user' prop previously passed in 'Dashboard' Route*/
const DashBoard = ({ user }) => {

    console.log(user)

    return(
        <>
       
            <h2>Dashboard Component</h2>
            <h4>Hello, {user?.name}</h4>
       
        </>
    )
}

export default DashBoard;