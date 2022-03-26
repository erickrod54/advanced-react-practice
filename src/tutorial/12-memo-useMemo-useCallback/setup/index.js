import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

/**
 * React.memo and useCallback app version 1 - index js - Features:
 * 
 *                  --> Setting 'useEffect' to prompt and count
 *                      the times that is called a render for
 *                      'BigList' and 'SingleProduct' component
 *            
 *                  -->  Using 'React.memo' to caching the 
 *                       render
 * 
 * Note:This app is directly pointing 'Performance Optimization'
 * that some apps need(react is fast as default, so to optimize
 * i have to analyze why i have to ), but 'Performance 
 * Optimization' add their own costs:
 *            --> Memory
 *            --> Computation power
 * 
 * Memoizing - caching results (remember)
 * -this is a computer science term-
 * 
 * in this version i use 'console.count' is a method that 
 * counts how many times something got prompted
 * 
 * Solving 'useState' behavior of re-render using 'React.memo'
 * both components several times; So:  
 
 // every time props or state changes, component re-renders
 */

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Index = () => {
  const { products } = useFetch(url)
  /**how i build the useState, is result the issue of the called */
  /**Every time the counter increase 'useState' preserves the 
   * value and triggers the re render*/
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <BigList products={products} />
    </>
  )
}
/**Here i wrap the component using 'React.memo' */
/**this solves the issue of 'useState' re rendering the
 * Components */
const BigList = React.memo(({ products }) => {
  useEffect(() => {
    /**Just rendering the app will be called 2 times */
    /**if click the counter, will be called the double times */
    /**-----this is happening because how is 'useState' using his 
     * value--------------------- */
    console.log('big list called')
  })
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}></SingleProduct>
      })}
    </section>
  )
})

const SingleProduct = ({ fields }) => {
  useEffect(() => {
    /**Just rendering the app will be called 24 times */
    /**if click the counter, will be called the double times */
    /**-----this is happening because how is 'useState' using his 
     * value--------------------- */
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
    </article>
  )
}
export default Index
