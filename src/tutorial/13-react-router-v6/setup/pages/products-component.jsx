import React from "react";
import { Link } from "react-router-dom";
import { Btn } from "../components/index.styles";

/**React-routerv6 Products app version 4 - 'Products' Component - 
 * Features:
 * 
 *              --> Implementing 'Btn' Style Component to 
 *                  '/about'.
 * 
 * Notes: this Component was applied here, in 'About' 
 * Component and Products Component. 
 */

const Products = () => {

    return(
        <>
           <h2>Products Component</h2>
            
            <p>Hit to go to Home</p>
            <Btn>
                <Link 
                    className="btn"
                    to='/about'>Go to About</Link>        
            </Btn> 
        </>
    )
}

export default Products;