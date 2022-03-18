import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'
/**
 * Custom Hook app version 1 - fetch example js - Fetaures:   
 *              --->Implementing 'useFetch' custom Hook
 * 
 * Note: the propouse of custom Hook is to rehuse functionality;
 * In this case i will set up to rehuse a fetch already done 
 * functionality for multiple projects
 * 
 * -----the use of the word 'use' is essential in order to
 * -----custom hook to work--example: 'useFecth, useRemove, etc'
 * 
 * Custom Hook --> to rehuse functionality
 * 
 * Components --> to rehuse 'JSX'
 */

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  /**here i implement the custom hook */
  const { loading, products } = useFetch(url)
  console.log(products)
  
  return (
    <div>
      <h2>Custom Hook - fetch</h2>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
