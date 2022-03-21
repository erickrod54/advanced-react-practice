import React from 'react';
import PropTypes from 'prop-types'
/**with this import i handle the missing image */
import defaultImage from '../../../assets/default-image.jpeg';

/** PropTypes app version 3 - 'Product' Component - Features:
 *          -->Importing 'PropTypes' package.
 *          -->Setting PropTypes in the Component.
 *          -->Setting default values using PropTypes 
 *             for the missing data:
 *                        --> 'image'
 *                        --> 'price'
 * 
 * Note: first i'll set PropTypes in the according the props
 * type, second i set default values, and then i can uncomment
 * JSX and render to watch default values. There is two 
 * approaches:
 * 
 * -------------This approach is the first--------------------
 * 
 *    --> PropTypes -> code more readable.
 *    --> Short Circuit operator and props -> code less readable.
 */

/**here i destructure 'Product' props */
const Product = ({image, name, price}) => {
  /**then when y prompted i checkout undefined values */
  
  console.log(image,name,price)
  return (
  <>
  {/**Third step */
  /**----after set up PropTypes and set default values
  * step i uncomment and i can visualize the data */}
    <article className='product'>
      <img src={image.url} alt={name}/>
      <h4>{name}</h4>
      <p>${price}</p>
    </article> 
  </>
  
  );
};

/**First step */ 
/**Here i set up PropTypes in the Component acording with
 * the data type of each prop, image an object, name as string
 * price as number every each required */
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

/**Second step */
/**I set defualt values */
Product.defaultProps = {
  name: 'default name',
  price: 3.99,
  image:defaultImage
}


export default Product;
