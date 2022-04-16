import React from "react";
import { Link } from "react-router-dom";
import { Btn } from "../components/index.styles";
import products from "../data";

/**React-routerv6 Products app version 6 - 'Products' Component - 
 * Features:
 * 
 *              --> Importing 'products' data.
 *      
 *              --> Mapping 'products' data, and rendering  
 *                  'name' prop from every product.
 * 
 *              --> Building a 'Link' to take to every 
 *                  'SingleProduct'.
 * 
 *              --> Building a a 'Link' to take back from
 *                  'Products' Component to '/home'
 * 
 * Notes: 'Products' Component contain the list of 'SingleProduct'
 */

const Products = () => {

    return(
        <>
           <h2>Products Component</h2>
           {/**Here i map the 'products' data */} 
           <div className='products'>
               {products.map((product) => {
                  return (
                  <article key={product.id}>
                       <h5>{product.name}</h5>
                       <Btn>
                {/**here i build the link to take
                 *  to every product */}
                        <Link to={`/products/${product.id}`}>
                            more info
                        </Link>
                       </Btn>
                   </article>)
               })}
           </div>
            {/**here i build the link to take
             * back to Home */}   
            <Btn>
                <Link 
                    className="btn"
                    to='/home'>Go Back Home</Link>        
            </Btn> 
        </>
    )
}

export default Products;