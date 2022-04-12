import React from "react";
import { Link } from "react-router-dom";
import { Btn } from "../components/index.styles";


/**React-routerv6 Products app version 4 - 'About' Component - 
 * Features:
 * 
 *              -->Updating 'Link' to '/home'
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
                    className="btn"
                    to='/home'>Go Back Home</Link>
            </Btn>
            
        </>
    )
}

export default About;