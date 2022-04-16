import React from "react";
import { useParams, Link } from "react-router-dom";
import { Btn } from "../components/index.styles";
import products from "../data";
import { ProductWrapper } from "../components/index.styles";

/**React-routerv6 Products app version 6 - 'SingleProduct' 
 * Component - Features:
 * 
 *          --> Building 'SingleProduct' for every single product
 *              to be rendered.
 * 
 *          --> Importing 'useParams' hook to get the url value 
 *              for 'productId'.
 * 
 *          -->Importing and Placing 'Btn' to style the 'Link'
 *             Component.
 * 
 *          --> Finding products, and rending 'image' and 'name'
 *              of every single product.
 * 
 *          --> Importing and Placing 'ProductWrapper' Component 
 *              to set Styles for 'SingleProduct'.
 * 
 * Notes: I apply a 'find' method and then i render 
 * 'image' and 'name'  
 * 
 */
const SingleProduct = () => {

    const { productId } = useParams();
    const product = products.find((product) => product.id === productId )
    const { image, name } = product;
    
    return(
        <>
          <ProductWrapper>
               <img src={image} alt={name} /> 
               <h5>{name}</h5>
            <Btn>
                <Link 
                    className='btn' 
                    to='/products'>Go Back to products</Link>
            </Btn>
          </ProductWrapper>
         
            
        </>
    )
}

export default SingleProduct;