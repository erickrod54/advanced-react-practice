import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/setup/2-useFetch'

/**
 * React.memo and useCallback app version 3 - index js - Features:
 * 
 *                   --> Building 'calculateMostExpensive'
 *                       to get the value of most Expensive
 *                       item.
 * 
 *                   --> Implementing 'useMemo' hook to 
 *                      'calculateMostExpensive' and memoize
 *                       the single value resulting.
 * 
 * Note: 'useMemo' hook deals memoizing a value, when i test
 * the function 'calculateMostExpensive', it re-renders in order
 * to re-build the function that calculates the values over and
 * over that take computation resources resulting expensive.
 * 
 *        React.memo    --> state or props   
 *        useCallbacks  --> props related with functionality
 *                          or can memoize a whole functionality
 * 
 *        useMemo       --> Memoize a single value
 * 
 * --every time props or state changes, component re-renders--
 */

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

/**Here i build 'calculateMostExpensive' functionality
 * to calculate the most expensive item
*/
const calculateMostExpensive = (data) => {
  /**the test to verify that indeed re-renders */
  console.log('Hello World')
  return data.reduce((total,item)=>{
    const price = item.fields.price;
    if (price >= total) {
      total = price;
    }
    return total
  }, 0)/100
}

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  

  const AddToCart = useCallback(() => {
    setCart(cart + 1)
  }, [cart])

const mostExpensive = useMemo(() => calculateMostExpensive(products),
[products])

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
  
      <h1 style={{marginTop: '3rem'}}>
        Cart: {cart}
      </h1>
      {/**here i make the call over the products */}
      <h1>Most Expensive: ${mostExpensive}</h1>
      <BigList products={products} AddToCart={AddToCart}/>
    </>
  )
}

const BigList = React.memo(({ products, AddToCart }) => {
  useEffect(() => {
    console.log('big list called')
  })
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct 
                  key={product.id} {...product}
                  AddToCart={AddToCart}
                  ></SingleProduct>
      })}
    </section>
  )
})

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
      <button onClick={AddToCart}>add to cart</button>
    </article>
  )
}
export default Index
