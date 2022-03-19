import { useState, useEffect } from 'react';
/**
 * Custom Hook app version 1 - useFetch Hook - Fetaures:   
 *              --->Building the 'useFetch' custom Hook
 * 
 * Note: i return the props, and i pass the url
 */

/**here i pass the url */
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
    /**i removed form the dependency, it will be passed */
  }, [])
  /**i set  up a return for the props that generate the fetch */
  return {loading, products}
};
