import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Btn } from "../components/index.styles";
import { ErrorWrapper } from "../components/index.styles";

/**React-routerv6 Products app version 1- 'Error' Component - 
 * Features:
 * 
 *              -->Building 'Error' Component.
 * 
 *              -->Importing and placing 'ErrorWrapper' to 
 *                 overwrite Global Styles for 'h3' from
 *                 'capitalize' to 'lowercase'.
 * 
 *              -->Importing Link to set a navigation Back to
 *                 'Home' Component.
 * 
 *              --> Importing and placing 'Btn' to Style Link
 *                  Component.
 * 
 *              --> Implementing 'useLocation' to get and render 
 *                  the 'pathname' that doesn't exist.
 * 
 * Notes: some interesting things applied here are:
 * 
 *          -> inline styles (to make space between the 
 *                            error message and the title)
 * 
 */

const Error = () => {

    const { pathname } = useLocation();
    
    return(
        <>
            <h2>Error Component</h2>
            <div style={{ padding: '4rem' }} >

                <h1>Something is wrong</h1>
                <ErrorWrapper>
                    <h3>'{pathname}' doesn't exist</h3>
                </ErrorWrapper>
            </div>
            <Btn>
                <Link className='btn' to='/'>Go Back Home</Link>
            </Btn>

        </>
    )
}

export default Error;