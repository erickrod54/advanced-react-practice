import { useState, useEffect, useCallback } from 'react';
/**
 * Custom Hook app version 2 - useFetch Hook - Fetaures:  
 *  
 *              --->Implementing 'useCallback' to memoize
 *                  getProducts and avoid missing dependency
 *                  warning. 
 * 
 * Note: every time that 'products' changes it will trigger 
 * the re-render, others changes triggered are:
 *        
 *              --->url
 *              --->url,getProducts
 * 
 * that's why they will set as dependencies
 */

/**here i pass the url */
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  /**First - i wrap 'getProducts' with useCallback hook */
  const getProducts = useCallback(async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
    /**Second - i set dependencies the 'url' */
      },[url])

  /**As useEffect trigger 'getProducts' a dependencies must
   *  be set */
  useEffect(() => {
    getProducts()
   /**Third - i set dependencies the 'url', and 'getProducts'*/
  }, [url,getProducts])
  return {loading, products}
};
