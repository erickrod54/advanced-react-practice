import React from 'react';
/**
 * PropTypes app version 2 - 'Product' Component - Features:
 *          -->Testing 'image' and 'price' by console log it.
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
  /**then when y prompted i checkout undefined values */
  
  console.log(image,name,price)
  return (
  <>
  {/**first i comment the block to get rid fo the error */}

    {/* <article className='product'>
      <img src={image.url} alt={name}/>
      <h4>{name}</h4>
      <p>${price}</p>
    </article> */}
  </>
  
  );
};

export default Product;
