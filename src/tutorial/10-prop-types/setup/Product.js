import React from 'react';
/**
 * PropTypes app version 1 - 'Product' Component - Features:
 *          -->Destructuring 'image', 'name' and 'price' of 
 *             every single product
 * 
 * Note: PropTypes refers to fix issues that sometimes i can
 * find on API's
 * 
 * this props are not present in the last object of the API:
 * 
 * --> 'price', 'image'
 * 
 * This is going to be fixed  using PropTypes
 */

/**here i destructure 'Product' props */
const Product = ({image, name, price}) => {
  return (
  <>
    <article className='product'>
      {/**here i try to access the image but for the issue will
       * throw an error*/}
      <img src={image.url} alt={name}/>
      <h4>{name}</h4>
      {/**here i access the price but doesn't exist for the
       * last product */}
      <p>${price}</p>
    </article>
  </>
  
  );
};

export default Product;
