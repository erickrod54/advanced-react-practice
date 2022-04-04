import React from "react";
import { Link } from "react-router-dom";
import { Btn } from "../components/index.styles";

/**React-routerv6 Products app version 1- 'About' Component - 
 * Features:
 * 
 *              -->Setting up a button to go back to 'Home'
 * 
 * Notes:This is done with 'Link' Component
 * 
 */

const About = () => {

    return(
        <>
            <h2>About Component</h2>
            <Btn>
                <Link 
                    className='btn' 
                    to='/'>Go Back Home</Link>
            </Btn>
        </>
    )
}

export default About;