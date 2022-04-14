import React from "react";
import { Link } from "react-router-dom";
import { Btn } from "../components/index.styles";

/**React-routerv6 Products app version 4 - 'Home' Component- 
 * Features:
 * 
 *              --> Implementing 'Btn' Style Component.
 * 
 * Notes: this Component was applied here and in 'About' 
 * Component. 
 */

const Home = () => {

    return(
        <>
            <h2>Home Component</h2>
            <p>Hit to go to About page</p>
        <Btn>
            <Link 
                className="btn"
                to='/about'
                >Go to About</Link>
        </Btn>       
        </>
    )
}


export default Home;