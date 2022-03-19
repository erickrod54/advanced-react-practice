import React from 'react'
import Product from './Product'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'
/**
 * PropTypes app version 1 - index js - Features:
 *          -->Importing 'useFecth' to use it in this practice.
 *          -->Destructuring 'products' prop with the API url
 *          -->Mapping a 'Product' Componet
 * 
 * Note: the custom hook 'useFecth' made for Custom Hook app
 * version 1, the code is rehused for this practice:
 * 
 * https://github.com/erickrod54/
 * advanced-react-practice/
 * blob/acc4082d7e42e0c2d097783439548f66843b6aba/src/
 * tutorial/9-custom-hooks/setup/2-useFetch.js
 * 
 */
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

/**here is the API url */
const url = 'https://course-api.com/react-prop-types-example'

const Index = () => {
  /**here i destructure products using 'useFecth' custom hook */
  const { products } = useFetch(url)
  return (
    <div>
      <h2>products</h2>
      <section className='products'>
        {/**here i map from 'products', every 'product' 
         * and return the 'Product' Component */}
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </section>
    </div>
  )
}

export default Index
