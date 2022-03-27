import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

/**
 * React.memo and useCallback app version 2 - index js - Features:
 * 
 *                  --> Building an 'AddToCart' functionality
 *                      and passing it top-down as a prop to 
 *                     'SingleProduct'
 * 
 *                  --> Implementing 'useCallback' hook to
 *                      fix the re-render triggered by 
 *                      'AddToCart'
 * 
 * Note: Memoizing renders can be split in two:  
 * 
 * -----(like was for 'product and count')-----
 *      for --> states --> 'React.memo'
 * 
 * -----(like it is for 'AddToCart' prop)-----
 *      for --> props --> 'useCallback'
 * 
 * every time props or state changes, component re-renders
 * remenber props can be a value or functionality
 * 
 * In this version 'AddToCart' increases 'cart' state so
 * will trigger a re-render (this time with an action
 * -'AddToCart' by  'cart' state changes-)  
 */

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  /**here i build a state for 'cart' */
  const [cart, setCart] = useState(0);

  /**---to use 'useCallback' hook i wrap the functionality
   *---and in this case i set 'cart' as a dependency cause
   *---it is what is triggering re-render for 'BigList'
   */

  /**First - i build the 'AddToCart' fuctionality*/
  const AddToCart = useCallback(() => {
    setCart(cart + 1)
    /**here i set cart as dependency so when cart state
     * changes only, then will create this functionality*/
  }, [cart])

  /**--next steps will be pass top-down the 'AddToCart' prop--*/
  /**----------to get 'SingleProduct' Component------------- */
  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      {/**here i render the counter */}
      <h1 style={{marginTop: '3rem'}}>
        Cart: {cart}
      </h1>
      {/**Second - i pass 'AddToCart' prop throught 'BigList'*/}
      <BigList products={products} AddToCart={AddToCart}/>
    </>
  )
}

/**Third - i destructure 'AddToCart' to pass throught
 * 'BigList' Component
*/
const BigList = React.memo(({ products, AddToCart }) => {
  useEffect(() => {
    console.log('big list called')
  })
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct 
                  key={product.id} {...product}
/**Fourth - i pass 'AddToCart' prop throught 'SingleProduct'*/
                  AddToCart={AddToCart}
                  ></SingleProduct>
      })}
    </section>
  )
})

/**Fifth - i destructure 'AddToCart' to pass throught
 * 'SingleProduct' Component
*/
const SingleProduct = ({ fields, AddToCart }) => {
  useEffect(() => {
    console.count('single item called')
  })
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
{/**Sixth - being destructured 'AddToCart' i build the
 * 'button' to simulate adding to the cart */}      
      <button onClick={AddToCart}>add to cart</button>
    </article>
  )
}
export default Index
