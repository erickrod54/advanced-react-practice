import React, { useState, useEffect } from 'react';

// cleanup function - mostly used for:
/**
 *    EventListeners, 
 *    components appering and dessappearing 
 *    suscriptions
 *  
 * objective of this good practice is avoid
 * 'Memory leak'
 */
// second argument can also used to clean memory, but 
/** the big approach of 'cleanup function' is that you
 * can design a function for specific cases
*/

const UseEffectCleanup = () => {
  /**this example is about window object size */
  const [size, setSize ] = useState(window.innerWidth)
  
  /**There is something called 'Memory leak' 
   * always is a good practice to build a 
   * cleanup function to avoid errors,
   * mostly with live update effects
   * like this example of checksize
  */
  const checksize = () =>{
    setSize(window.innerWidth)
  }
  /**if i leave it without a cleanup function
   * i can check the live update by JavaConsole
   * 'Elements > EventListeners' for this case
   * of EventListeners
   */
  
  useEffect(() =>{ 
    /**every time i resize i call, in this case 'Hello World' */
    console.log('Hello World')
    window.addEventListener('resize', checksize)

    /**Building cleanup function -i place a return with a 
     * function that removes the EventListener- */
    return () => {
      console.log('cleanup function -i clean Hello World :) -')
      window.removeEventListener('resize', checksize)
    }
  })
  



  return (
    <>
      <h2>useEffect cleanup Function</h2>
      <h2>Window</h2>
      <h2>{size} PX</h2>
    </>
      );
};



export default UseEffectCleanup;
