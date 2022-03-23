import React from 'react';
import PropTypes from 'prop-types'
/**with this import i handle the missing image */
import defaultImage from '../../../assets/default-image.jpeg';

/** PropTypes app version 4 - 'Product' Component - Features:
 * 
 *          -->Applying Short Circuit operator 'Or' to set 
 *             default value for 'price'. 
 * 
 *          -->Using an 'url' variable to condition the existence
 *             pf 'image' and 'image.url'.
 * 
 *          -->Applying Short Circuit operator 'Or' to set default
 *             value for 'image'.
 * 
 *          -->Applying Short Circuit operator 'Or' to set default
 *             value for 'name'.
 * 
 * Note: first i'll set PropTypes in the according the props
 * type, second i set default values, and then i can uncomment
 * JSX and render to watch default values. There is two 
 * approaches:
 * 
 * -------------This approach is the second--------------------
 * 
 *    --> PropTypes -> code more readable.
 *    --> Short Circuit operator and props -> code less readable.
 * 
 * keyboard shortcut - rafcp -this will set to test PropTypes-
 */


/**here i destructure 'Product' props */
const Product = ({image, name, price}) => {
  /**then when y prompted i checkout undefined values */

  /**Here i made Short Circuit Opeartor - cheking if
   * image exist and image.url*/
  const url = image && image.url 
  
  console.log(image,name,price)
  return (
  <>
    <article className='product'>
      {/**Here i condition the 'url' or 'defaultImage'*/}
      <img src={url || defaultImage} alt={name || 'default name'}/>
      <h4>{name}</h4>
      {/**Here i condition the price if exists or '3.99' 
       * default value*/}
      <p>${price || 3.99 }</p>
    </article> 
  </>
  
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

/**first i comment the first approach */
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image:defaultImage
// }


export default Product;