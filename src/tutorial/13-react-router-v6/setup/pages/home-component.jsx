import React from "react";
import { Link } from "react-router-dom";

/**React-routerv6 Products app version 3 - index js - Features:
 * 
 *              --> Relocating 'Home' Component
 * 
 * Notes: this code was relocated to his won file
 */

const Home = () => {

    return(
        <>
            <h2>Home Component</h2>
            <p>Hit to go to About page</p>
            <Link 
                to='/about'
                className="btn"
                >Go to About</Link>
        </>
    )
}


export default Home;