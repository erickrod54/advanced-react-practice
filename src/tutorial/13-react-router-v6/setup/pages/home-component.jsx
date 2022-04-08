import React from "react";
import { Link } from "react-router-dom";

import { Btn } from "../components/index.styles";

/**React-routerv6 Products app version 1- 'Home' Component - 
 * Features:
 * 
 *              -->Implementing 'Link' Component to navigate
 *                 to 'About'
 *              -->Importing and placing 'Btn' Style Component
 *                 to wrap the 'Link'
 * 
 * Notes: For intern navigation on the Website the best approach 
 * is use 'Link', and for external still use 'a' tags with 'href'
 * 
 * i created a div in order to applied styles defined on 
 * index.styles.js
 */

const Home = () => {

    return(
        <>
            <h2>Home Component</h2>
            <Btn>
              <div>
                  <Link 
                    to='/about' 
                    className="btn">About</Link>
              </div>
            </Btn>
        </>
    )
}

export default Home;